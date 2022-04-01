import { Article } from '@/domain/models'

export interface SaveArticles {
  save: (articles: Article[]) => Promise<void>
}
