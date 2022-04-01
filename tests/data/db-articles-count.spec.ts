import { DbArticlesCount } from '@/data/usecases'
import { CountArticlesRepositorySpy } from './mock-article'

type Sut = {
  countArticlesRepositorySpy: CountArticlesRepositorySpy
  sut: DbArticlesCount
}

const makeSut = (): Sut => {
  const countArticlesRepositorySpy = new CountArticlesRepositorySpy()
  const sut = new DbArticlesCount(countArticlesRepositorySpy)
  return {
    sut,
    countArticlesRepositorySpy
  }
}

describe('DbCountArticles UseCase', () => {
  it('Should call ContArticlesRepository', async () => {
    const { sut, countArticlesRepositorySpy } = makeSut()
    const countSpy = jest.spyOn(countArticlesRepositorySpy, 'count')
    await sut.count()
    expect(countSpy).toHaveBeenCalled()
  })

  it('Should throw if CountArticlesRepository throws', () => {
    const { sut, countArticlesRepositorySpy } = makeSut()
    jest.spyOn(countArticlesRepositorySpy, 'count').mockRejectedValueOnce(new Error())
    const promise = sut.count()
    expect(promise).rejects.toThrow()
  })

  it.todo('Should return a any number if ContArticlesRepository returns a number')
})
