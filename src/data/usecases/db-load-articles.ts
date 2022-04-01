import { LoadArticles } from '@/domain/contracts'
import { LoadArticlesRepository } from '@/data/protocols'

export class DbLoadArticles implements LoadArticles {
  constructor (private readonly loadArticlesRepository: LoadArticlesRepository) {}

  async load (): Promise<LoadArticles.Result> {
    return this.loadArticlesRepository.loadAll()
  }
}
