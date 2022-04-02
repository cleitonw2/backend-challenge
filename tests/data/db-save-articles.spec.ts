import { DbSaveArticles } from '@/data/usecases'
import {
  CountArticlesRepositorySpy,
  GetAllArticlesApiSpy,
  SaveArticlesRepositorySpy,
  LoadDateOfLastArticleRepositorySpy
} from './mock-article'

type SutTypes = {
  sut: DbSaveArticles
  countRepository: CountArticlesRepositorySpy
  getAllArticlesApiSpy: GetAllArticlesApiSpy
  saveArticlesRepositorySpy: SaveArticlesRepositorySpy
  loadDateOfLastArticleRepositorySpy: LoadDateOfLastArticleRepositorySpy
}

const makeSut = (): SutTypes => {
  const countRepository = new CountArticlesRepositorySpy()
  const getAllArticlesApiSpy = new GetAllArticlesApiSpy()
  const saveArticlesRepositorySpy = new SaveArticlesRepositorySpy()
  const loadDateOfLastArticleRepositorySpy = new LoadDateOfLastArticleRepositorySpy()
  const sut = new DbSaveArticles(
    countRepository,
    getAllArticlesApiSpy,
    saveArticlesRepositorySpy,
    loadDateOfLastArticleRepositorySpy
  )
  return {
    sut,
    countRepository,
    getAllArticlesApiSpy,
    saveArticlesRepositorySpy,
    loadDateOfLastArticleRepositorySpy
  }
}

describe('DbSaveArticles UseCase', () => {
  it('Should call ContArticlesRepository', async () => {
    const { sut, countRepository } = makeSut()
    const countSpy = jest.spyOn(countRepository, 'count')
    await sut.save('any_default_url', 'any_url')
    expect(countSpy).toHaveBeenCalled()
  })

  it('Should throw if ContArticlesRepository throws', async () => {
    const { sut, countRepository } = makeSut()
    jest.spyOn(countRepository, 'count').mockRejectedValueOnce(new Error())
    const promise = sut.save('any_default_url', 'any_url')
    expect(promise).rejects.toThrow()
  })

  it('Should call GetAllArticlesApi whit correct param', async () => {
    const { sut, countRepository, getAllArticlesApiSpy, loadDateOfLastArticleRepositorySpy } = makeSut()
    countRepository.resutl = 0
    await sut.save('any_default_url', 'any_url')
    expect(getAllArticlesApiSpy.url).toBe('any_url')
    countRepository.resutl = 1
    await sut.save('any_default_url', 'any_url')
    const date = loadDateOfLastArticleRepositorySpy.result
    expect(getAllArticlesApiSpy.url).toBe('any_default_url' + date)
  })

  it('Should throw if GetAllArticlesApi throws', async () => {
    const { sut, getAllArticlesApiSpy } = makeSut()
    jest.spyOn(getAllArticlesApiSpy, 'getAll').mockRejectedValueOnce(new Error())
    const promise = sut.save('any_default_url', 'any_url')
    expect(promise).rejects.toThrow()
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

  it('Should throw if SaveArticlesRepository throws', async () => {
    const { sut, saveArticlesRepositorySpy } = makeSut()
    jest.spyOn(saveArticlesRepositorySpy, 'save').mockRejectedValueOnce(new Error())
    const promise = sut.save('any_default_url', 'any_url')
    expect(promise).rejects.toThrow()
  })

  it('Should call LoadDateOfLastArticleRepository', async () => {
    const { sut, loadDateOfLastArticleRepositorySpy } = makeSut()
    const loadDateSpy = jest.spyOn(loadDateOfLastArticleRepositorySpy, 'loadDate')
    await sut.save('any_default_url', 'any_url')
    expect(loadDateSpy).toHaveBeenCalled()
  })

  it('Should throw if LoadDateOfLastArticleRepository throws', async () => {
    const { sut, loadDateOfLastArticleRepositorySpy } = makeSut()
    jest.spyOn(loadDateOfLastArticleRepositorySpy, 'loadDate').mockRejectedValueOnce(new Error())
    const promise = sut.save('any_default_url', 'any_url')
    expect(promise).rejects.toThrow()
  })
})
