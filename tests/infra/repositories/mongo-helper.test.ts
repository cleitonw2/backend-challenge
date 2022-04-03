import { MongoHelper as sut } from '@/infra/repositories'

describe('Mongo Helper()', () => {
  beforeAll(async () => {
    await sut.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await sut.disconnect()
  })

  test('Should reconnect if mongodb is down', async () => {
    const accountCollection = await sut.getCollection('articles')
    expect(accountCollection).toBeTruthy()
    await sut.disconnect()
    const collection = await sut.getCollection('articles')
    expect(collection).toBeTruthy()
  })
})
