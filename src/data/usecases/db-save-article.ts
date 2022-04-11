import { SaveArticle } from '@/domain/usecases'
import { SaveArticlesRepository } from '@/data/protocols'

export class DbSaveArticle implements SaveArticle {
  constructor (private readonly saveArticlesRepository: SaveArticlesRepository) {}

  async save (article: SaveArticle.Params): Promise<void> {
    await this.saveArticlesRepository.save([article])
  }
}
