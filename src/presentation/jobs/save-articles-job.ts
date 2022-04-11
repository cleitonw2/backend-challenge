import { SaveArticles } from '@/domain/usecases'
import { Job } from '@/presentation/protocols'

export class SaveArticlesJob implements Job {
  constructor (private readonly saveArticles: SaveArticles) {}

  async execute (defaultUrl: string, url: string): Promise<void> {
    try {
      await this.saveArticles.save(defaultUrl, url)
    } catch (error) {
      return null
    }
  }
}
