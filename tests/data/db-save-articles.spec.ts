import { DbSaveArticles } from '@/data/usecases'
import { CountArticlesRepositorySpy } from './mock-article'

type SutTypes = {
  sut: DbSaveArticles
  countRepository: CountArticlesRepositorySpy
}

const makeSut = (): SutTypes => {
  const countRepository = new CountArticlesRepositorySpy()
  const sut = new DbSaveArticles(countRepository)
  return {
    sut,
    countRepository
  }
}

describe('DbSaveArticles UseCase', () => {
  it('Should call ContArticlesRepository', async () => {
    const { sut, countRepository } = makeSut()
    const countSpy = jest.spyOn(countRepository, 'count')
    await sut.save('any_default_url', 'any_url')
    expect(countSpy).toHaveBeenCalled()
  })
})
