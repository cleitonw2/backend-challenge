import { SaveArticle } from '@/domain/contracts'
import { Article } from '@/domain/models'
import { badRequest, ok } from '../helpers'
import { Controller, HttpResponse, Validation } from '../protocols'

export class SaveArticleController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly saveArticle: SaveArticle
  ) {}

  async handle (request: SaveArticleController.Request): Promise<HttpResponse> {
    const error = this.validation.validate(request)
    if (error) return badRequest(error)
    await this.saveArticle.save(request)
    return ok('')
  }
}

export namespace SaveArticleController {
  export type Request = Article
}
