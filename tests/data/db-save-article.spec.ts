import { DbSaveArticle } from '@/data/usecases'
import { Article } from '@/domain/models'
import { SaveArticlesRepositorySpy } from './mock-article'

const mokcArticle = (): Article => ({
  id: Math.random(),
  title: 'any_title',
  url: 'any_url',
  imageUrl: 'any_img_url',
  newsSite: 'any',
  publishedAt: 'any',
  launches: [{ id: 'any_id' }],
  events: [{ id: 122 }]
})

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
    const article = mokcArticle()
    await sut.save(article)
    expect(saveArticlesRepositorySpy.params[0]).toEqual(article)
  })

  it('Should throw if SaveArticlesRepository throws', () => {
    const { sut, saveArticlesRepositorySpy } = makeSut()
    jest.spyOn(saveArticlesRepositorySpy, 'save').mockRejectedValueOnce(new Error())
    const promise = sut.save(mokcArticle())
    expect(promise).rejects.toThrow()
  })
})
