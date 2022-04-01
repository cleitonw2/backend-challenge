import { Article } from '@/domain/models'

export interface LoadArticlesRepository {
  loadAll: () => Promise<LoadArticlesRepository.Result>
}

export namespace LoadArticlesRepository {
  export type Result = Article[]
}
