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

  it.todo('Should throw if LoadArticlesRepository throws')

  it.todo('Should return articles if LoadArticlesRepository returns articles')
})
