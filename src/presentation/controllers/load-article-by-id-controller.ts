import { Controller, HttpResponse, Validation } from '../protocols'

export class LoadArticleByIdController implements Controller {
  constructor (private readonly validation: Validation) {}

  async handle (request: LoadArticleByIdController.Params): Promise<HttpResponse> {
    this.validation.validate(request)
    return null as any
  }
}

export namespace LoadArticleByIdController {
  export type Params = {
    id: string
  }
}
