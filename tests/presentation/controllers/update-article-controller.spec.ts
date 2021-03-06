import { UpdateArticleController } from '@/presentation/controllers'
import { mockArticle } from '@/tests/domain/mocks'
import { badRequest, ok } from '@/presentation/helpers'
import { ValidationSpy, UpdateArticleSpy } from '../mocks'

const mockRequest = (): UpdateArticleController.Params => {
  const { id, ...rest } = mockArticle()
  return {
    id: id.toString(),
    ...rest
  }
}

type SutTypes = {
  sut: UpdateArticleController
  validationSpy: ValidationSpy
  updateArticleSpy: UpdateArticleSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const updateArticleSpy = new UpdateArticleSpy()
  const sut = new UpdateArticleController(validationSpy, updateArticleSpy)
  return {
    sut,
    validationSpy,
    updateArticleSpy
  }
}

describe('UpdateArticle Controller', () => {
  it('Should call Validation with correct params', async () => {
    const { sut, validationSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    const { id, ...rest } = request
    expect(validationSpy.input).toEqual({ id: +id, ...rest })
  })

  it('Should return 400 if Validation return an error', async () => {
    const { sut, validationSpy } = makeSut()
    validationSpy.result = new Error()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(badRequest(new Error()))
  })

  it('Should call UpdateArticle with correct params', async () => {
    const { sut, updateArticleSpy } = makeSut()
    const request = mockRequest()
    await sut.handle(request)
    const { id, ...rest } = request
    expect(updateArticleSpy.params).toEqual({ id: +id, ...rest })
  })

  it('Should return 500 if UpdateArticle throws', async () => {
    const { sut, updateArticleSpy } = makeSut()
    jest.spyOn(updateArticleSpy, 'update').mockRejectedValueOnce(new Error())
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse.statusCode).toBe(500)
  })

  it('Should return 200 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(ok(''))
  })
})
