import { Article } from '@/domain/models'

export interface LoadArticleByIdRepository {
  loadById: (id: number) => Promise<LoadArticleByIdRepository.Result>
}

export namespace LoadArticleByIdRepository {
  export type Result = Article
}
