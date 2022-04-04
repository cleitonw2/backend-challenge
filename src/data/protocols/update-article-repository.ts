import { Article } from '@/domain/models'

export interface UpdateArticleRepository {
  update: (data: UpdateArticleRepository.Params) => Promise<void>
}

export namespace UpdateArticleRepository {
  export type Params = Article
}
