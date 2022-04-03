import { Article } from '@/domain/models'
import { Controller, HttpResponse, Validation } from '../protocols'

export class SaveArticleController implements Controller {
  constructor (
    private readonly validation: Validation
  ) {}

  async handle (request: SaveArticleController.Request): Promise<HttpResponse> {
    await this.validation.validate(request)
    return null as any
  }
}

export namespace SaveArticleController {
  export type Request = Article
}
