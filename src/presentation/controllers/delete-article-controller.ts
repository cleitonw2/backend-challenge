import { Controller, HttpResponse, Validation } from '../protocols'

export class DeleteArticleController implements Controller {
  constructor (
    private readonly validation: Validation
  ) {}

  async handle (request: DeleteArticleController.Params): Promise<HttpResponse> {
    const { id } = request
    this.validation.validate({ id: +id })
    return null as any
  }
}

export namespace DeleteArticleController {
  export type Params = {
    id: string
  }
}
