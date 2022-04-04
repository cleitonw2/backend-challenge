import { DeleteArticleController } from '@/presentation/controllers'
import { badRequest } from '@/presentation/helpers'
import { ValidationSpy } from '../mocks'

type SutTypes = {
  sut: DeleteArticleController
  validationSpy: ValidationSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const sut = new DeleteArticleController(validationSpy)
  return {
    sut,
    validationSpy
  }
}

describe('DeleteArticle Controller', () => {
  it('Should call Validation with correct param', async () => {
    const { sut, validationSpy } = makeSut()
    const id = Math.random()
    await sut.handle({ id: id.toString() })
    expect(validationSpy.input).toEqual({ id: +id })
  })

  it('Should return 400 if Validation return an error', async () => {
    const { sut, validationSpy } = makeSut()
    validationSpy.result = new Error()
    const httpRequest = await sut.handle({ id: '1234' })
    expect(httpRequest).toEqual(badRequest(new Error()))
  })

  it.todo('Should call DeleteArticle with correct param')

  it.todo('Should return 500 if DeleteArticle throws')

  it.todo('Should return 200 on success')
})
