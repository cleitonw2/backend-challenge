import { Article } from '@/domain/models'

export interface LoadArticleById {
  load: (id: string) => Promise<LoadArticleById.Result>
}

export namespace LoadArticleById {
  export type Result = Article
}
