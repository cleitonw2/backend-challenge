import { SaveArticle, SaveArticles } from '@/domain/contracts'
import { Article } from '@/domain/models'

export class SaveArticlesSpy implements SaveArticles {
  defaultUrl: string
  url: string

  async save (defaultUrl: string, url: string): Promise<void> {
    this.defaultUrl = defaultUrl
    this.url = url
    Promise.resolve()
  }
}

export class SaveArticleSpy implements SaveArticle {
  article: Article

  async save (article: Article): Promise<void> {
    this.article = article
    Promise.resolve()
  }
}
