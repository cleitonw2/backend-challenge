import { Article } from '@/domain/models'

export interface SaveArticlesRepository {
  save: (articles: SaveArticlesRepository.Params) => Promise<void>
}

export namespace SaveArticlesRepository {
  export type Params = Article[]
}
