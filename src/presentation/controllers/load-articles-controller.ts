import { LoadArticles } from '@/domain/contracts'
import { ok, serverError } from '../helpers'
import { Controller, HttpResponse } from '../protocols'

export class LoadArticlesController implements Controller {
  constructor (private readonly loadArticles: LoadArticles) {}

  async handle (request: LoadArticlesController.Params): Promise<HttpResponse> {
    try {
      const { offset, limit } = request
      const articles = await this.loadArticles.load({ offset: +offset, limit: +limit })
      return ok(articles)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace LoadArticlesController {
  export type Params = {
    offset?: string
    limit?: string
  }
}
