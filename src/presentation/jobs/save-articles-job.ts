import { SaveArticles } from '@/domain/contracts'
import { Job } from '@/presentation/protocols'

export class SaveArticlesJob implements Job {
  constructor (private readonly saveArticles: SaveArticles) {}

  async execute (defaultUrl: string, url: string): Promise<void> {
    await this.saveArticles.save(defaultUrl, url)
  }
}
