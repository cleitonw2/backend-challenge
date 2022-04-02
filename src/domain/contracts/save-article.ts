import { Article } from '@/domain/models'

export interface SaveArticle {
  save: (articles: SaveArticle.Params) => Promise<void>
}

export namespace SaveArticle {
  export type Params = Article
}
