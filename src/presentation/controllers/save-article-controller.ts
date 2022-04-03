import { Article } from '@/domain/models'
import { badRequest } from '../helpers'
import { Controller, HttpResponse, Validation } from '../protocols'

export class SaveArticleController implements Controller {
  constructor (
    private readonly validation: Validation
  ) {}

  async handle (request: SaveArticleController.Request): Promise<HttpResponse> {
    const error = this.validation.validate(request)
    if (error) return badRequest(error)
    return null as any
  }
}

export namespace SaveArticleController {
  export type Request = Article
}
