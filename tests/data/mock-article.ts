import { SaveArticlesRepository, CountArticlesRepository } from '@/data/protocols'

export class SaveArticlesRepositorySpy implements SaveArticlesRepository {
  params: SaveArticlesRepository.Params

  async save (articles: SaveArticlesRepository.Params): Promise<void> {
    this.params = articles
  }
}

export class CountArticlesRepositorySpy implements CountArticlesRepository {
  resutl: number = 2

  async count (): Promise<number> {
    return Promise.resolve(this.resutl)
  }
}
