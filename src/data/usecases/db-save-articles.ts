import { SaveArticles } from '@/domain/contracts'
import { SaveArticlesRepository } from '@/data/protocols'

export class DbSaveArticles implements SaveArticles {
  constructor (private readonly saveArticlesRepository: SaveArticlesRepository) {}

  async save (articles: SaveArticles.Params): Promise<void> {
    await this.saveArticlesRepository.save(articles)
  }
}
