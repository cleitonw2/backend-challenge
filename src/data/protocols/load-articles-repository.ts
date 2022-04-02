import { Article } from '@/domain/models'

export interface LoadArticlesRepository {
  loadAll: (data: LoadArticlesRepository.Params) => Promise<LoadArticlesRepository.Result>
}

export namespace LoadArticlesRepository {
  export type Params = {
    offset: number
    limit: number
  }
  export type Result = Article[]
}
