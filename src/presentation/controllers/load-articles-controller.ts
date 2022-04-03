import { LoadArticles } from '@/domain/contracts'
import { Controller, HttpResponse } from '../protocols'

export class LoadArticlesController implements Controller {
  constructor (private readonly loadArticles: LoadArticles) {}

  async handle (request?: LoadArticlesController.Params): Promise<HttpResponse> {
    const { offset = 0, limit = 10 } = request
    await this.loadArticles.load({ offset, limit })
    return null as any
  }
}

export namespace LoadArticlesController {
  export type Params = {
    offset: number
    limit: number
  }
}
