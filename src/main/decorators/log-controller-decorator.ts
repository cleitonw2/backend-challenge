import { LogErrorRepository } from '@/data/protocols'
import { Controller, HttpResponse } from '@/presentation/protocols'

export class LogControllerDecorator implements Controller {
  constructor (
    private readonly controller: Controller,
    private readonly logErrorRepository: LogErrorRepository
  ) {}

  async handle (request: any): Promise<HttpResponse> {
    const httpRequest = await this.controller.handle(request)
    const serverError = httpRequest.statusCode === 500
    if (serverError) {
      await this.logErrorRepository.logError(httpRequest.body.stack)
    }
    return httpRequest
  }
}
