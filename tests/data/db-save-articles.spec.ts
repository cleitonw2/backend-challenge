import { DbSaveArticles } from '@/data/usecases'
import { CountArticlesRepositorySpy, GetAllArticlesApiSpy } from './mock-article'

type SutTypes = {
  sut: DbSaveArticles
  countRepository: CountArticlesRepositorySpy
  getAllArticlesApiSpy: GetAllArticlesApiSpy
}

const makeSut = (): SutTypes => {
  const countRepository = new CountArticlesRepositorySpy()
  const getAllArticlesApiSpy = new GetAllArticlesApiSpy()
  const sut = new DbSaveArticles(countRepository, getAllArticlesApiSpy)
  return {
    sut,
    countRepository,
    getAllArticlesApiSpy
  }
}

describe('DbSaveArticles UseCase', () => {
  it('Should call ContArticlesRepository', async () => {
    const { sut, countRepository } = makeSut()
    const countSpy = jest.spyOn(countRepository, 'count')
    await sut.save('any_default_url', 'any_url')
    expect(countSpy).toHaveBeenCalled()
  })

  it('Should call GetAllArticlesApiSpy whit correct param', async () => {
    const { sut, countRepository, getAllArticlesApiSpy } = makeSut()
    countRepository.resutl = 0
    await sut.save('any_default_url', 'any_url')
    expect(getAllArticlesApiSpy.url).toBe('any_url')
    countRepository.resutl = 1
    await sut.save('any_default_url', 'any_url')
    expect(getAllArticlesApiSpy.url).toBe('any_default_url')
  })
})
