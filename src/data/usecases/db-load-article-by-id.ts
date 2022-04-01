import { LoadArticleById } from '@/domain/contracts'
import { Article } from '@/domain/models'
import { LoadArticleByIdRepository } from '../protocols/load-article-by-id-repository'

export class DbLoadArticleById implements LoadArticleById {
  constructor (private readonly loadArticleByIdRepository: LoadArticleByIdRepository) {}

  async load (id: number): Promise<Article> {
    return this.loadArticleByIdRepository.loadById(id)
  }
}
