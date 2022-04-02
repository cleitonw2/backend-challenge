import { DbSaveArticles } from '@/data/usecases'
import { CountArticlesRepositorySpy, GetAllArticlesApiSpy, SaveArticlesRepositorySpy } from './mock-article'

type SutTypes = {
  sut: DbSaveArticles
  countRepository: CountArticlesRepositorySpy
  getAllArticlesApiSpy: GetAllArticlesApiSpy
  saveArticlesRepositorySpy: SaveArticlesRepositorySpy
}

const makeSut = (): SutTypes => {
  const countRepository = new CountArticlesRepositorySpy()
  const getAllArticlesApiSpy = new GetAllArticlesApiSpy()
  const saveArticlesRepositorySpy = new SaveArticlesRepositorySpy()
  const sut = new DbSaveArticles(countRepository, getAllArticlesApiSpy, saveArticlesRepositorySpy)
  return {
    sut,
    countRepository,
    getAllArticlesApiSpy,
    saveArticlesRepositorySpy
  }
}

describe('DbSaveArticles UseCase', () => {
  it('Should call ContArticlesRepository', async () => {
    const { sut, countRepository } = makeSut()
    const countSpy = jest.spyOn(countRepository, 'count')
    await sut.save('any_default_url', 'any_url')
    expect(countSpy).toHaveBeenCalled()
  })

  it('Should call GetAllArticlesApi whit correct param', async () => {
    const { sut, countRepository, getAllArticlesApiSpy } = makeSut()
    countRepository.resutl = 0
    await sut.save('any_default_url', 'any_url')
    expect(getAllArticlesApiSpy.url).toBe('any_url')
    countRepository.resutl = 1
    await sut.save('any_default_url', 'any_url')
    expect(getAllArticlesApiSpy.url).toBe('any_default_url')
  })

  it('Should call SaveArticlesRepository whit correct params', async () => {
    const { sut, countRepository, saveArticlesRepositorySpy, getAllArticlesApiSpy } = makeSut()
    countRepository.resutl = 0
    await sut.save('any_default_url', 'any_url')
    expect(saveArticlesRepositorySpy.params).toEqual(getAllArticlesApiSpy.result)
    countRepository.resutl = 1
    await sut.save('any_default_url', 'any_url')
    expect(saveArticlesRepositorySpy.params).toEqual(getAllArticlesApiSpy.result)
  })
})
