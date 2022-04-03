import { SaveArticleController } from '@/presentation/controllers'
import { SaveArticleSpy, ValidationSpy } from '../mocks'
import { mockArticle } from '@/tests/domain/mocks'

type SutTypes = {
  sut: SaveArticleController
  validationSpy: ValidationSpy
  saveArticleSpy: SaveArticleSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const saveArticleSpy = new SaveArticleSpy()
  const sut = new SaveArticleController(validationSpy, saveArticleSpy)
  return {
    sut,
    validationSpy,
    saveArticleSpy
  }
}

describe('SaveArticle Controller', () => {
  it('Should call Validation with correct params', async () => {
    const { sut, validationSpy } = makeSut()
    const article = mockArticle()
    await sut.handle(article)
    expect(validationSpy.input).toEqual(article)
  })

  it('Should return 400 if Validation return an error', async () => {
    const { sut, validationSpy } = makeSut()
    validationSpy.result = new Error('Invalid Params')
    const httpResponse = await sut.handle(mockArticle())
    expect(httpResponse.body.error).toBe('Invalid Params')
    expect(httpResponse.statusCode).toBe(400)
  })

  it('Should call SaveArticle with correct params', async () => {
    const { sut, saveArticleSpy } = makeSut()
    const article = mockArticle()
    await sut.handle(article)
    expect(saveArticleSpy.article).toEqual(article)
  })

  it('Should return 500 if SaveArticle throws', async () => {
    const { sut, saveArticleSpy } = makeSut()
    jest.spyOn(saveArticleSpy, 'save').mockRejectedValueOnce(new Error())
    const httpResponse = await sut.handle(mockArticle())
    expect(httpResponse.statusCode).toBe(500)
  })

  it('Should return 200 on success', async () => {
    const { sut } = makeSut()
    const httpResponse = await sut.handle(mockArticle())
    expect(httpResponse.statusCode).toBe(200)
  })
})
