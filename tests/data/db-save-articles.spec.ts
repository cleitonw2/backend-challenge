import { DbSaveArticles } from '@/data/usecases'
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
  sut: DbSaveArticles
}

const makeSut = (): Sut => {
  const saveArticlesRepositorySpy = new SaveArticlesRepositorySpy()
  const sut = new DbSaveArticles(saveArticlesRepositorySpy)
  return {
    sut,
    saveArticlesRepositorySpy
  }
}

describe('DbSaveArticles UseCase', () => {
  it('Should call SaveArticlesRepository whit correct params', async () => {
    const { sut, saveArticlesRepositorySpy } = makeSut()
    const articles = [mokcArticle()]
    await sut.save(articles)
    expect(saveArticlesRepositorySpy.params).toEqual(articles)
  })

  it('Should throw if SaveArticlesRepository throws', () => {
    const { sut, saveArticlesRepositorySpy } = makeSut()
    jest.spyOn(saveArticlesRepositorySpy, 'save').mockRejectedValueOnce(new Error())
    const promise = sut.save([mokcArticle()])
    expect(promise).rejects.toThrow()
  })
})
