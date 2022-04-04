import { Article } from '@/domain/models'
import { badRequest } from '../helpers'
import { Controller, HttpResponse, Validation } from '../protocols'

export class UpdateArticleController implements Controller {
  constructor (
    private readonly validation: Validation
  ) {}

  async handle (request: UpdateArticleController.Params): Promise<HttpResponse> {
    const error = this.validation.validate(request)
    if (error) return badRequest(error)
    return null as any
  }
}

export namespace UpdateArticleController {
  export type Params = {
    id: string
    article: Omit<Article, 'id'>
  }
}
