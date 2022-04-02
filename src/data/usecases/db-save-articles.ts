import { SaveArticlesJob } from '@/domain/contracts'
import { CountArticlesRepository } from '@/data/protocols'

export class DbSaveArticles implements SaveArticlesJob {
  constructor (
    private readonly countRepository: CountArticlesRepository
  ) {}

  async save (defaultUrl: string, url: string): Promise<void> {
    await this.countRepository.count()
  }
}
