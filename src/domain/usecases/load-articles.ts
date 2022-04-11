import { Article } from '@/domain/models'

export interface LoadArticles {
  load: (data: LoadArticles.Params) => Promise<LoadArticles.Result>
}

export namespace LoadArticles {
  export type Params = {
    offset?: number
    limit?: number
  }
  export type Result = Article[]
}
