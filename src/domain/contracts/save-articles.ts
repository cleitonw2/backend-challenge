import { Article } from '@/domain/models'

export interface SaveArticles {
  save: (articles: SaveArticles.Params) => Promise<void>
}

export namespace SaveArticles {
  export type Params = Article[]
}
