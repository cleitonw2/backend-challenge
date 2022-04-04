import { UpdateArticleController } from '@/presentation/controllers'
import { mockUpdateArticle } from '@/tests/domain/mocks'
import { ValidationSpy } from '../mocks'

const mockRequest = (): UpdateArticleController.Params => ({
  id: Math.random().toString(),
  article: mockUpdateArticle()
})

type SutTypes = {
  sut: UpdateArticleController
  validationSpy: ValidationSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const sut = new UpdateArticleController(validationSpy)
  return {
    sut,
    validationSpy
  }
}

describe('LoadArticleById Controller', () => {
  it('Should call Validation with correct params', async () => {
    const { sut, validationSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    expect(validationSpy.input).toEqual(request)
  })

  it.todo('Should return 400 if Validation return an error')

  it.todo('Should call UpdateArticle with correct param')

  it.todo('Should return 500 if UpdateArticle throws')

  it.todo('Should return 200 on success')
})
