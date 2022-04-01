import { Article } from '@/domain/models'

export interface LoadArticleById {
  load: (id: number) => Promise<LoadArticleById.Result>
}

export namespace LoadArticleById {
  export type Result = Article
}
