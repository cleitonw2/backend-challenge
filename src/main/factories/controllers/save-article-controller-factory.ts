import { SaveArticleController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'
import { makeLogControllerDecorator } from '../decorators'
import { makeDbSaveArticle } from '../usecases'
import { makeSaveArticleValidation } from './save-article-validation-factory'

export const makeSaveArticleController = (): Controller => {
  const controller = new SaveArticleController(
    makeSaveArticleValidation(),
    makeDbSaveArticle()
  )
  return makeLogControllerDecorator(controller)
}
