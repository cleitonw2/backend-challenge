import { SaveArticles } from '@/domain/usecases'
import { DbSaveArticles } from '@/data/usecases'
import { ArticleMongoRepository } from '@/infra/repositories'
import { ArticleApi } from '@/infra/api'

export const makeDbSaveArticles = (): SaveArticles => {
  const articleMongoRepository = new ArticleMongoRepository()
  const articleApi = new ArticleApi()
  return new DbSaveArticles(
    articleMongoRepository,
    articleApi,
    articleMongoRepository,
    articleMongoRepository
  )
}
