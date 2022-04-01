import { SaveArticlesRepository } from '@/data/protocols'

export class SaveArticlesRepositorySpy implements SaveArticlesRepository {
  params: SaveArticlesRepository.Params

  async save (articles: SaveArticlesRepository.Params): Promise<void> {
    this.params = articles
  }
}
