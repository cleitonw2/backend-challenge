import { DeleteArticle } from '@/domain/contracts'
import { badRequest } from '../helpers'
import { Controller, HttpResponse, Validation } from '../protocols'

export class DeleteArticleController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly deleteArticle: DeleteArticle
  ) {}

  async handle (request: DeleteArticleController.Params): Promise<HttpResponse> {
    const { id } = request
    const error = this.validation.validate({ id: +id })
    if (error) return badRequest(error)
    await this.deleteArticle.delete(+id)
    return null as any
  }
}

export namespace DeleteArticleController {
  export type Params = {
    id: string
  }
}
