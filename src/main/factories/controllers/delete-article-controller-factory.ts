import { DeleteArticleController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'
import { makeDbDeleteArticle } from '../usecases'
import { makeIdValidation } from './'

export const makeDeleteArticleController = (): Controller => {
  return new DeleteArticleController(makeIdValidation(), makeDbDeleteArticle())
}
