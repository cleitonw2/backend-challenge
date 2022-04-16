import { LoadArticleByIdController } from '@/presentation/controllers'
import { badRequest, ok } from '@/presentation/helpers'
import { ValidationSpy, LoadArticleByIdSpy } from '../mocks'

type SutTypes = {
  sut: LoadArticleByIdController
  validationSpy: ValidationSpy
  loadArticleByIdSpy: LoadArticleByIdSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const loadArticleByIdSpy = new LoadArticleByIdSpy()
  const sut = new LoadArticleByIdController(validationSpy, loadArticleByIdSpy)
  return {
    sut,
    validationSpy,
    loadArticleByIdSpy
  }
}

describe('LoadArticleById Controller', () => {
  it('Should call Validation with correct param', async () => {
    const { sut, validationSpy } = makeSut()
    const id = Math.random()
    await sut.handle({ id: id.toString() })
    expect(validationSpy.input).toEqual({ id: id })
  })

  it('Should return 400 if Validation return an error', async () => {
    const { sut, validationSpy } = makeSut()
    validationSpy.result = new Error()
    const httpResponse = await sut.handle({ id: '12345' })
    expect(httpResponse).toEqual(badRequest(new Error()))
  })

  it('Should call LoadArticleById with correct param', async () => {
    const { sut, loadArticleByIdSpy } = makeSut()
    const id = Math.random()
    await sut.handle({ id: id.toString() })
    expect(loadArticleByIdSpy.id).toBe(id)
  })

  it('Should return 500 if LoadArticleById throws', async () => {
    const { sut, loadArticleByIdSpy } = makeSut()
    jest.spyOn(loadArticleByIdSpy, 'load').mockRejectedValueOnce(new Error())
    const httpResponse = await sut.handle({ id: '1234' })
    expect(httpResponse.statusCode).toBe(500)
  })

  it('Should return 200 on success', async () => {
    const { sut, loadArticleByIdSpy } = makeSut()
    const httpResponse = await sut.handle({ id: '1234' })
    expect(httpResponse).toEqual(ok(loadArticleByIdSpy.resutl))
  })
})
