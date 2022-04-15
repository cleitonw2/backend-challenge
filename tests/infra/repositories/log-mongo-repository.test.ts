import { Collection } from 'mongodb'
import { MongoHelper, LogMongoRepository } from '@/infra/repositories'

let errorCollection: Collection

const makeSut = (): LogMongoRepository => new LogMongoRepository()

describe('LogMongo Repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    errorCollection = await MongoHelper.getCollection('errors')
    await errorCollection.deleteMany({})
  })

  it('Should create an error log on success', async () => {
    const sut = makeSut()
    await sut.logError('any_error')
    await sut.logError('error')
    const count = await errorCollection.countDocuments()
    expect(count).toBe(2)
  })
})
