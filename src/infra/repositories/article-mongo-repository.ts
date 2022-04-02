import { SaveArticlesRepository, LoadArticlesRepository } from '@/data/protocols'
import { MongoHelper } from './mongo-helper'

export class ArticleMongoRepository implements SaveArticlesRepository, LoadArticlesRepository {
  async save (articles: SaveArticlesRepository.Params): Promise<void> {
    const articleCollection = await MongoHelper.getCollection('articles')
    await articleCollection.insertMany(articles)
  }

  async loadAll (data: LoadArticlesRepository.Params): Promise<LoadArticlesRepository.Result> {
    const { offset, limit } = data
    const articleCollection = await MongoHelper.getCollection('articles')
    const articles = await articleCollection.find()
      .sort({ publishedAt: -1 })
      .skip(offset)
      .limit(limit)
      .toArray()
    return MongoHelper.mapCollection(articles)
  }
}
