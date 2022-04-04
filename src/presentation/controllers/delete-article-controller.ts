import { badRequest } from '../helpers'
import { Controller, HttpResponse, Validation } from '../protocols'

export class DeleteArticleController implements Controller {
  constructor (
    private readonly validation: Validation
  ) {}

  async handle (request: DeleteArticleController.Params): Promise<HttpResponse> {
    const { id } = request
    const error = this.validation.validate({ id: +id })
    if (error) return badRequest(error)
    return null as any
  }
}

export namespace DeleteArticleController {
  export type Params = {
    id: string
  }
}
