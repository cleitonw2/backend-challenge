import { Article } from '@/domain/models'
import { SaveArticleController } from '@/presentation/controllers'
import { SaveArticleSpy, ValidationSpy } from '../mocks'

const mokcArticle = (): Article => ({
  id: Math.random(),
  title: 'any_title',
  url: 'any_url',
  imageUrl: 'any_img_url',
  newsSite: 'any',
  publishedAt: 'any',
  launches: [{ id: 'any_id' }],
  events: [{ id: 122 }]
})

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
    const article = mokcArticle()
    await sut.handle(article)
    expect(validationSpy.input).toEqual(article)
  })

  it('Should return 400 if Validation return an error', async () => {
    const { sut, validationSpy } = makeSut()
    validationSpy.result = new Error('Invalid Params')
    const httpResponse = await sut.handle(mokcArticle())
    expect(httpResponse.body.error).toBe('Invalid Params')
    expect(httpResponse.statusCode).toBe(400)
  })

  it('Should call SaveArticle with correct params', async () => {
    const { sut, saveArticleSpy } = makeSut()
    const article = mokcArticle()
    await sut.handle(article)
    expect(saveArticleSpy.article).toEqual(article)
  })
})
