import { DeleteArticleController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'
import { makeLogControllerDecorator } from '../decorators'
import { makeDbDeleteArticle } from '../usecases'
import { makeIdValidation } from './'

export const makeDeleteArticleController = (): Controller => {
  const controller = new DeleteArticleController(makeIdValidation(), makeDbDeleteArticle())
  return makeLogControllerDecorator(controller)
}
