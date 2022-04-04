import { Article } from '@/domain/models'
import { Controller, HttpResponse, Validation } from '../protocols'

export class UpdateArticleController implements Controller {
  constructor (
    private readonly validation: Validation
  ) {}

  async handle (request: UpdateArticleController.Params): Promise<HttpResponse> {
    this.validation.validate(request)
    return null as any
  }
}

export namespace UpdateArticleController {
  export type Params = {
    id: string
    article: Omit<Article, 'id'>
  }
}
