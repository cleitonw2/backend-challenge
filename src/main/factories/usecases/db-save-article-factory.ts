import { SaveArticle } from '@/domain/contracts'
import { DbSaveArticle } from '@/data/usecases'
import { ArticleMongoRepository } from '@/infra/repositories'

export const makeDbSaveArticle = (): SaveArticle => {
  const articleMongoRepository = new ArticleMongoRepository()
  return new DbSaveArticle(articleMongoRepository)
}
