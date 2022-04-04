import { UpdateArticleController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'
import { makeDbUpdateArticle } from '../usecases'
import { makeUpdateArticleValidation } from './'

export const makeUpdateArticleController = (): Controller => {
  return new UpdateArticleController(makeUpdateArticleValidation(), makeDbUpdateArticle())
}
