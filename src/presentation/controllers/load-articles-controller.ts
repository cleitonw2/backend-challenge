import { LoadArticles } from '@/domain/contracts'
import { ok, serverError } from '../helpers'
import { Controller, HttpResponse } from '../protocols'

export class LoadArticlesController implements Controller {
  constructor (private readonly loadArticles: LoadArticles) { }

  async handle (request?: LoadArticlesController.Params): Promise<HttpResponse> {
    try {
      const { offset = 0, limit = 10 } = request
      const articles = await this.loadArticles.load({ offset, limit })
      return ok(articles)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace LoadArticlesController {
  export type Params = {
    offset: number
    limit: number
  }
}
