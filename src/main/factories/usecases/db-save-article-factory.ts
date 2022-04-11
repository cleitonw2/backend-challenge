import { SaveArticle } from '@/domain/usecases'
import { DbSaveArticle } from '@/data/usecases'
import { ArticleMongoRepository } from '@/infra/repositories'

export const makeDbSaveArticle = (): SaveArticle => {
  const articleMongoRepository = new ArticleMongoRepository()
  return new DbSaveArticle(articleMongoRepository)
}
