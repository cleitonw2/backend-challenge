import { UpdateArticle } from '@/domain/contracts'
import { Article } from '@/domain/models'
import { badRequest } from '../helpers'
import { Controller, HttpResponse, Validation } from '../protocols'

export class UpdateArticleController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly updateArticle: UpdateArticle
  ) {}

  async handle (request: UpdateArticleController.Params): Promise<HttpResponse> {
    const error = this.validation.validate(request)
    if (error) return badRequest(error)
    const { id, ...rest } = request
    await this.updateArticle.update({ id: +id, ...rest })
    return null as any
  }
}

export namespace UpdateArticleController {
  export type Params = {
    id: string
    article: Omit<Article, 'id'>
  }
}
