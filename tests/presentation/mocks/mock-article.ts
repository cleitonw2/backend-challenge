import { SaveArticles } from '@/domain/contracts'

export class SaveArticlesSpy implements SaveArticles {
  defaultUrl: string
  url: string

  async save (defaultUrl: string, url: string): Promise<void> {
    this.defaultUrl = defaultUrl
    this.url = url
    Promise.resolve()
  }
}
