import { LoadArticlesController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'
import { makeLogControllerDecorator } from '../decorators'
import { makeDbLoadArticles } from '../usecases'

export const makeLoadArticlesController = (): Controller => {
  const controller = new LoadArticlesController(makeDbLoadArticles())
  return makeLogControllerDecorator(controller)
}
