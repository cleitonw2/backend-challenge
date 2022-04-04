import { LoadArticleById } from '@/domain/contracts'
import { badRequest } from '../helpers'
import { Controller, HttpResponse, Validation } from '../protocols'

export class LoadArticleByIdController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly loadArticleById: LoadArticleById
  ) {}

  async handle (request: LoadArticleByIdController.Params): Promise<HttpResponse> {
    const error = this.validation.validate(request)
    if (error) return badRequest(error)
    await this.loadArticleById.load(+request.id)
    return null as any
  }
}

export namespace LoadArticleByIdController {
  export type Params = {
    id: string
  }
}
