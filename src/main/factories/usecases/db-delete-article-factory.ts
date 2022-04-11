import { DeleteArticle } from '@/domain/usecases'
import { DbDeleteArticle } from '@/data/usecases'
import { ArticleMongoRepository } from '@/infra/repositories'

export const makeDbDeleteArticle = (): DeleteArticle => {
  const articleMongoRepository = new ArticleMongoRepository()
  return new DbDeleteArticle(articleMongoRepository)
}
