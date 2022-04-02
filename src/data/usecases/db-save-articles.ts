import { SaveArticlesJob } from '@/domain/contracts'
import { CountArticlesRepository, GetAllArticlesApi } from '@/data/protocols'

export class DbSaveArticles implements SaveArticlesJob {
  constructor (
    private readonly countRepository: CountArticlesRepository,
    private readonly getAllArticlesApi: GetAllArticlesApi
  ) {}

  async save (defaultUrl: string, url: string): Promise<void> {
    const count = await this.countRepository.count()
    if (count === 0) {
      await this.getAllArticlesApi.getAll(url)
    } else {
      await this.getAllArticlesApi.getAll(defaultUrl)
    }
  }
}
