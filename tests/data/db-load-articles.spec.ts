import { DbLoadArticles } from '@/data/usecases'
import { LoadArticlesRepository } from '@/data/protocols'
import { LoadArticlesRepositorySpy } from './mock-article'

const mockParams = (): LoadArticlesRepository.Params => ({
  offset: 1,
  limit: 10
})

type Sut = {
  loadArticlesRepositorySpy: LoadArticlesRepositorySpy
  sut: DbLoadArticles
}

const makeSut = (): Sut => {
  const loadArticlesRepositorySpy = new LoadArticlesRepositorySpy()
  const sut = new DbLoadArticles(loadArticlesRepositorySpy)
  return {
    sut,
    loadArticlesRepositorySpy
  }
}

describe('DbLoadArticles UseCase', () => {
  it('Should call LoadArticlesRepository', async () => {
    const { sut, loadArticlesRepositorySpy } = makeSut()
    const params = mockParams()
    await sut.load(params)
    expect(loadArticlesRepositorySpy.params).toEqual(params)
  })

  it('Should throw if LoadArticlesRepository throws', () => {
    const { sut, loadArticlesRepositorySpy } = makeSut()
    jest.spyOn(loadArticlesRepositorySpy, 'loadAll').mockRejectedValueOnce(new Error())
    const promise = sut.load(mockParams())
    expect(promise).rejects.toThrow()
  })

  it('Should return articles if LoadArticlesRepository returns articles', async () => {
    const { sut, loadArticlesRepositorySpy } = makeSut()
    const articles = await sut.load(mockParams())
    expect(articles).toEqual(loadArticlesRepositorySpy.resutl)
  })
})
