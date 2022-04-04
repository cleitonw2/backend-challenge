import { LoadArticleByIdController } from '@/presentation/controllers'
import { badRequest, serverError } from '@/presentation/helpers'
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
    await sut.handle({ id: '12345' })
    expect(validationSpy.input).toEqual({ id: '12345' })
  })

  it('Should return 400 if Validation return an error', async () => {
    const { sut, validationSpy } = makeSut()
    validationSpy.result = new Error()
    const httpResponse = await sut.handle({ id: '12345' })
    expect(httpResponse).toEqual(badRequest(new Error()))
  })

  it('Should call LoadArticleById with correct param', async () => {
    const { sut, loadArticleByIdSpy } = makeSut()
    const request = Math.random()
    await sut.handle({ id: request.toString() })
    expect(loadArticleByIdSpy.id).toBe(request)
  })

  it('Should return 500 if LoadArticleById throws', async () => {
    const { sut, loadArticleByIdSpy } = makeSut()
    jest.spyOn(loadArticleByIdSpy, 'load').mockRejectedValueOnce(new Error())
    const httpResponse = await sut.handle({ id: '1234' })
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  it.todo('Should return 200 on success')
})
