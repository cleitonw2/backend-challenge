import { DbLoadArticleById } from '@/data/usecases'
import { LoadArticleByIdRepositorySpy } from './mock-article'

type Sut = {
  loadArticleByIdRepositorySpy: LoadArticleByIdRepositorySpy
  sut: DbLoadArticleById
}

const makeSut = (): Sut => {
  const loadArticleByIdRepositorySpy = new LoadArticleByIdRepositorySpy()
  const sut = new DbLoadArticleById(loadArticleByIdRepositorySpy)
  return {
    sut,
    loadArticleByIdRepositorySpy
  }
}

describe('DbLoadArticleById UseCase', () => {
  it('Should call LoadArticleByIdRepository whit correct param', async () => {
    const { sut, loadArticleByIdRepositorySpy } = makeSut()
    const loadSpy = jest.spyOn(loadArticleByIdRepositorySpy, 'loadById')
    const id = Math.random().toString()
    await sut.load(id)
    expect(loadSpy).toHaveBeenCalledWith(id)
  })

  it.todo('Should throw if LoadArticleByIdRepository throws')

  it.todo('Should return article if LoadArticleByIdRepository returns article')
})
