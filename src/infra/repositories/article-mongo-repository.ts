import { SaveArticlesRepository } from '@/data/protocols'
import { MongoHelper } from './mongo-helper'

export class ArticleMongoRepository implements SaveArticlesRepository {
  async save (articles: SaveArticlesRepository.Params): Promise<void> {
    const articleCollection = await MongoHelper.getCollection('articles')
    await articleCollection.insertMany(articles)
  }
}
