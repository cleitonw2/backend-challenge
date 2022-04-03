import { LoadArticlesController } from '@/presentation/controllers'
import { LoadArticlesSpy } from '../mocks'

const mockRequest = (): LoadArticlesController.Params => ({
  offset: 5,
  limit: 20
})

type SutTypes = {
  sut: LoadArticlesController
  loadArticlesSpy: LoadArticlesSpy
}

const makeSut = (): SutTypes => {
  const loadArticlesSpy = new LoadArticlesSpy()
  const sut = new LoadArticlesController(loadArticlesSpy)
  return {
    sut,
    loadArticlesSpy
  }
}

describe('SaveArticle Controller', () => {
  it('Should call LoadArticles with correct params', async () => {
    const { sut, loadArticlesSpy } = makeSut()
    await sut.handle(mockRequest())
    expect(loadArticlesSpy.params).toEqual(mockRequest())
  })

  it.todo('Should return 500 if LoadArticles throws')

  it.todo('Should return 200 on success')
})
