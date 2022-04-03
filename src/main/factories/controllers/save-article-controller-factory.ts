import { SaveArticleController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'
import { makeDbSaveArticle } from '../usecases'
import { makeSaveArticleValidation } from './save-article-validation-factory'

export const makeSaveArticleController = (): Controller => {
  return new SaveArticleController(makeSaveArticleValidation(), makeDbSaveArticle())
}
