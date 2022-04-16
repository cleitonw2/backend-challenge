import { LoadArticleByIdController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'
import { makeLogControllerDecorator } from '../decorators'
import { makeDbLoadArticleById } from '../usecases'
import { makeIdValidation } from './'

export const makeLoadArticleByIdController = (): Controller => {
  const controller = new LoadArticleByIdController(
    makeIdValidation(),
    makeDbLoadArticleById()
  )
  return makeLogControllerDecorator(controller)
}
