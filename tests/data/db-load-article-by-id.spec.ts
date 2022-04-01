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
    const id = Math.random()
    await sut.load(id)
    expect(loadSpy).toHaveBeenCalledWith(id)
  })

  it('Should throw if LoadArticleByIdRepository throws', () => {
    const { sut, loadArticleByIdRepositorySpy } = makeSut()
    jest.spyOn(loadArticleByIdRepositorySpy, 'loadById').mockRejectedValueOnce(new Error())
    const promise = sut.load(Math.random())
    expect(promise).rejects.toThrow()
  })

  it('Should return article if LoadArticleByIdRepository returns article', async () => {
    const { sut, loadArticleByIdRepositorySpy } = makeSut()
    const article = await sut.load(Math.random())
    expect(article).toEqual(loadArticleByIdRepositorySpy.resutl)
  })
})
