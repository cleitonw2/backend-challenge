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
})
