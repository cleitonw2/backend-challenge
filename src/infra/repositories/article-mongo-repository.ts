import {
  SaveArticlesRepository,
  LoadArticlesRepository,
  LoadArticleByIdRepository,
  CountArticlesRepository
} from '@/data/protocols'
import { Article } from '@/domain/models'
import { MongoHelper } from './mongo-helper'

export class ArticleMongoRepository implements SaveArticlesRepository, LoadArticlesRepository,
CountArticlesRepository, LoadArticleByIdRepository {
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

  async loadById (id: number): Promise<Article> {
    const articleCollection = await MongoHelper.getCollection('articles')
    const article = await articleCollection.findOne({ id })
    return MongoHelper.map(article)
  }

  async count (): Promise<number> {
    const articleCollection = await MongoHelper.getCollection('articles')
    return articleCollection.countDocuments()
  }
}
