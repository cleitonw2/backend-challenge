import { UpdateArticle } from '@/domain/contracts'
import { badRequest, ok, serverError } from '../helpers'
import { Controller, HttpResponse, Validation } from '../protocols'

export class UpdateArticleController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly updateArticle: UpdateArticle
  ) {}

  async handle (request: UpdateArticleController.Params): Promise<HttpResponse> {
    try {
      const { id, ...rest } = request
      const error = this.validation.validate({ id: +id, ...rest })
      if (error) return badRequest(error)
      await this.updateArticle.update({ id: +id, ...rest })
      return ok('')
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace UpdateArticleController {
  export type Params = {
    id: string
    featured?: boolean
    title: string
    url: string
    imageUrl: string
    newsSite: string
    summary?: string
    publishedAt: string
    launches: [{
      id: string
      provider?: string
    }]
    events: [{
      id: number
      provider?: string
    }]
  }
}
