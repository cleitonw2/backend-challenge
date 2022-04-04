import { LoadArticles } from '@/domain/contracts'
import { DbLoadArticles } from '@/data/usecases'
import { ArticleMongoRepository } from '@/infra/repositories'

export const makeDbLoadArticles = (): LoadArticles => {
  const articleMongoRepository = new ArticleMongoRepository()
  return new DbLoadArticles(articleMongoRepository)
}
