import {
  LoadArticles,
  SaveArticle,
  SaveArticles,
  LoadArticleById,
  UpdateArticle,
  DeleteArticle
} from '@/domain/usecases'
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

export class LoadArticleByIdSpy implements LoadArticleById {
  id: number
  resutl: LoadArticleById.Result = mockArticle()

  async load (id: number): Promise<LoadArticleById.Result> {
    this.id = id
    return Promise.resolve(this.resutl)
  }
}

export class UpdateArticleSpy implements UpdateArticle {
  params: UpdateArticle.Params

  async update (data: UpdateArticle.Params): Promise<void> {
    this.params = data
    Promise.resolve()
  }
}

export class DeleteArticleSpy implements DeleteArticle {
  id: number

  async delete (id: number): Promise<void> {
    this.id = id
    Promise.resolve()
  }
}
