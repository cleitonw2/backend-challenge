import { LoadArticleByIdController } from '@/presentation/controllers'
import { badRequest } from '@/presentation/helpers'
import { ValidationSpy } from '../mocks'

type SutTypes = {
  sut: LoadArticleByIdController
  validationSpy: ValidationSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const sut = new LoadArticleByIdController(validationSpy)
  return {
    sut,
    validationSpy
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

  it.todo('Should call LoadArticleById with correct param')

  it.todo('Should return 400 if LoadArticleById fails')

  it.todo('Should return 500 if LoadArticleById throws')

  it.todo('Should return 200 on success')
})
