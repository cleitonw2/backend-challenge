import { Controller, HttpResponse } from '@/presentation/protocols'
import { ok } from '@/presentation/helpers'

export class ControllerSpy implements Controller {
  httpResponse: HttpResponse = ok('')
  request: any

  async handle (request: any): Promise<HttpResponse> {
    this.request = request
    return Promise.resolve(this.httpResponse)
  }
}
