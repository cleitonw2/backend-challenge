import { Collection } from 'mongodb'
import { MongoHelper, ArticleMongoRepository } from '@/infra/repositories'
import { Article } from '@/domain/models'

let articleCollection: Collection

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

const makeSut = (): ArticleMongoRepository => new ArticleMongoRepository()

describe('ArticleMongoRepository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    articleCollection = await MongoHelper.getCollection('articles')
    await articleCollection.deleteMany({})
  })

  describe('save()', () => {
    it('Should create articles', async () => {
      const sut = makeSut()
      const article = mokcArticle()
      await sut.save([article])
      const result = await articleCollection.findOne({
        id: article.id
      })
      expect(result._id).toBeTruthy()
      expect(result.id).toBe(article.id)
    })
  })

  describe('loadAll()', () => {
    it('Should load all articles', async () => {
      const sut = makeSut()
      const article1 = mokcArticle()
      const article2 = mokcArticle()
      await articleCollection.insertMany([article1, article2])
      const articles = await sut.loadAll({
        limit: 0,
        offset: 0
      })
      expect(articles).toHaveLength(2)
    })
  })

  describe('count()', () => {
    it('Should count articles', async () => {
      const sut = makeSut()
      const article1 = mokcArticle()
      const article2 = mokcArticle()
      await articleCollection.insertMany([article1, article2])
      const articles = await sut.count()
      expect(articles).toBe(2)
    })
  })

  describe('loadById()', () => {
    it('Should load article by id', async () => {
      const sut = makeSut()
      const article1 = mokcArticle()
      const article2 = mokcArticle()
      await articleCollection.insertMany([article1, article2])
      const result = await sut.loadById(article1.id)
      expect(result.id).toBe(article1.id)
      expect(result.title).toBe(article1.title)
    })
  })

  describe('update()', () => {
    it('Should update article', async () => {
      const sut = makeSut()
      const article2 = mokcArticle()
      await articleCollection.insertMany([mokcArticle(), article2])
      const title = Math.random().toString()
      const url = Math.random().toString()
      const provider = Math.random().toString()
      await sut.update({
        id: article2.id,
        article: {
          id: article2.id,
          title,
          url,
          imageUrl: 'any_img_url',
          newsSite: 'any',
          publishedAt: 'any',
          launches: [{
            id: 'any_id',
            provider
          }],
          events: [{ id: 122 }]
        }
      })
      const result = await articleCollection.findOne({ id: article2.id })
      expect(result.title).toBe(title)
      expect(result.url).toBe(url)
      expect(result.launches[0].provider).toBe(provider)
    })
  })

  describe('delete()', () => {
    it('Should delete article', async () => {
      const sut = makeSut()
      const article2 = mokcArticle()
      await articleCollection.insertMany([mokcArticle(), article2])
      await sut.delete(article2.id)
      const result = await articleCollection.findOne({ id: article2.id })
      expect(result).toBeNull()
    })
  })
})
