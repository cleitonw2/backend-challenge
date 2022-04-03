import { Article } from '@/domain/models'
import { SaveArticleController } from '@/presentation/controllers'
import { ValidationSpy } from '../mocks'

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
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const sut = new SaveArticleController(validationSpy)
  return {
    sut,
    validationSpy
  }
}

describe('SaveArticle Controller', () => {
  it('Should call Validation with correct params', async () => {
    const { sut, validationSpy } = makeSut()
    const article = mokcArticle()
    await sut.handle(article)
    expect(validationSpy.input).toEqual(article)
  })
})
