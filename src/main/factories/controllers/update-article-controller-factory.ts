import { UpdateArticleController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'
import { makeLogControllerDecorator } from '../decorators'
import { makeDbUpdateArticle } from '../usecases'
import { makeUpdateArticleValidation } from './'

export const makeUpdateArticleController = (): Controller => {
  const controller = new UpdateArticleController(makeUpdateArticleValidation(), makeDbUpdateArticle())
  return makeLogControllerDecorator(controller)
}
