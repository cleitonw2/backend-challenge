import { CountArticles } from '@/domain/contracts'
import { CountArticlesRepository } from '@/data/protocols'

export class DbArticlesCount implements CountArticles {
  constructor (private readonly countArticlesRepository: CountArticlesRepository) {}

  async count (): Promise<number> {
    return this.countArticlesRepository.count()
  }
}
