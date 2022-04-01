import { DbLoadArticles } from '@/data/usecases'
import { LoadArticlesRepositorySpy } from './mock-article'

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
    const loadSpy = jest.spyOn(loadArticlesRepositorySpy, 'loadAll')
    await sut.load()
    expect(loadSpy).toHaveBeenCalled()
  })

  it('Should throw if LoadArticlesRepository throws', () => {
    const { sut, loadArticlesRepositorySpy } = makeSut()
    jest.spyOn(loadArticlesRepositorySpy, 'loadAll').mockRejectedValueOnce(new Error())
    const promise = sut.load()
    expect(promise).rejects.toThrow()
  })

  it('Should return articles if LoadArticlesRepository returns articles', async () => {
    const { sut, loadArticlesRepositorySpy } = makeSut()
    const articles = await sut.load()
    expect(articles).toEqual(loadArticlesRepositorySpy.resutl)
  })
})
