import { LoadArticleById } from '@/domain/usecases'
import { DbLoadArticleById } from '@/data/usecases'
import { ArticleMongoRepository } from '@/infra/repositories'

export const makeDbLoadArticleById = (): LoadArticleById => {
  const articleMongoRepository = new ArticleMongoRepository()
  return new DbLoadArticleById(articleMongoRepository)
}
