import { LoadArticleById } from '@/domain/contracts'
import { badRequest, ok, serverError } from '../helpers'
import { Controller, HttpResponse, Validation } from '../protocols'

export class LoadArticleByIdController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly loadArticleById: LoadArticleById
  ) {}

  async handle (request: LoadArticleByIdController.Params): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) return badRequest(error)
      const article = await this.loadArticleById.load(+request.id)
      return ok(article)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace LoadArticleByIdController {
  export type Params = {
    id: string
  }
}
