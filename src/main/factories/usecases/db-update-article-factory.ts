import { UpdateArticle } from '@/domain/usecases'
import { DbUpdateArticle } from '@/data/usecases'
import { ArticleMongoRepository } from '@/infra/repositories'

export const makeDbUpdateArticle = (): UpdateArticle => {
  const articleMongoRepository = new ArticleMongoRepository()
  return new DbUpdateArticle(articleMongoRepository)
}
