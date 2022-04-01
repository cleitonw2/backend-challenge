import { Article } from '@/domain/models'

export interface LoadArticleByIdRepository {
  loadById: (id: string) => Promise<LoadArticleByIdRepository.Result>
}

export namespace LoadArticleByIdRepository {
  export type Result = Article
}
