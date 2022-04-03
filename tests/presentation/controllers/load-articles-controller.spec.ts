import { LoadArticlesController } from '@/presentation/controllers'
import { serverError, ok } from '@/presentation/helpers'
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

  it('Should return 500 if LoadArticles throws', async () => {
    const { sut, loadArticlesSpy } = makeSut()
    jest.spyOn(loadArticlesSpy, 'load').mockRejectedValueOnce(new Error())
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  it('Should return 200 on success', async () => {
    const { sut, loadArticlesSpy } = makeSut()
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(ok(loadArticlesSpy.result))
  })
})
