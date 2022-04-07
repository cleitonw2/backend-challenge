import { DbLoadArticles } from '@/data/usecases'
import { LoadArticlesRepository } from '@/data/protocols'
import { LoadArticlesRepositorySpy } from './mock-article'

const mockParams = (): LoadArticlesRepository.Params => ({
  offset: 5,
  limit: 20
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
  it('Should call LoadArticlesRepository with correct params', async () => {
    const { sut, loadArticlesRepositorySpy } = makeSut()
    const params = mockParams()
    await sut.load(params)
    expect(loadArticlesRepositorySpy.params).toEqual(params)
  })

  it('Should call LoadArticlesRepository with correct params if empty data', async () => {
    const { sut, loadArticlesRepositorySpy } = makeSut()
    await sut.load({})
    expect(loadArticlesRepositorySpy.params).toEqual({ offset: 0, limit: 10 })
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
