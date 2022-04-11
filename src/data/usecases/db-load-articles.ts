import { LoadArticles } from '@/domain/usecases'
import { LoadArticlesRepository } from '@/data/protocols'

export class DbLoadArticles implements LoadArticles {
  constructor (private readonly loadArticlesRepository: LoadArticlesRepository) {}

  async load (data: LoadArticles.Params): Promise<LoadArticles.Result> {
    const { offset, limit } = data
    const params = !offset || !limit ? { offset: 0, limit: 10 } : { offset, limit }
    return this.loadArticlesRepository.loadAll(params)
  }
}
