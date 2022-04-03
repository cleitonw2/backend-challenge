import { DbSaveArticle } from '@/data/usecases'
import { SaveArticlesRepositorySpy } from './mock-article'
import { mockArticle } from '@/tests/domain/mocks'

type Sut = {
  saveArticlesRepositorySpy: SaveArticlesRepositorySpy
  sut: DbSaveArticle
}

const makeSut = (): Sut => {
  const saveArticlesRepositorySpy = new SaveArticlesRepositorySpy()
  const sut = new DbSaveArticle(saveArticlesRepositorySpy)
  return {
    sut,
    saveArticlesRepositorySpy
  }
}

describe('DbSaveArticles UseCase', () => {
  it('Should call SaveArticlesRepository whit correct params', async () => {
    const { sut, saveArticlesRepositorySpy } = makeSut()
    const article = mockArticle()
    await sut.save(article)
    expect(saveArticlesRepositorySpy.params[0]).toEqual(article)
  })

  it('Should throw if SaveArticlesRepository throws', () => {
    const { sut, saveArticlesRepositorySpy } = makeSut()
    jest.spyOn(saveArticlesRepositorySpy, 'save').mockRejectedValueOnce(new Error())
    const promise = sut.save(mockArticle())
    expect(promise).rejects.toThrow()
  })
})
