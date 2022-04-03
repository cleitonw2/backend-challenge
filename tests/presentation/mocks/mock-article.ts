import { LoadArticles, SaveArticle, SaveArticles } from '@/domain/contracts'
import { Article } from '@/domain/models'
import { mockArticle } from '@/tests/domain/mocks'

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

export class LoadArticlesSpy implements LoadArticles {
  result: LoadArticles.Result = [mockArticle()]
  params: LoadArticles.Params

  async load (data: LoadArticles.Params): Promise<LoadArticles.Result> {
    this.params = data
    return Promise.resolve(this.result)
  }
}
