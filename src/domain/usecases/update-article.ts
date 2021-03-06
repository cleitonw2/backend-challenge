import { Article } from '../models'

export interface UpdateArticle {
  update: (data: UpdateArticle.Params) => Promise<void>
}

export namespace UpdateArticle {
  export type Params = Article
}
