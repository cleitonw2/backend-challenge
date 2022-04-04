import { LoadArticleByIdController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'
import { makeDbLoadArticleById } from '../usecases'
import { makeIdValidation } from './'

export const makeLoadArticleByIdController = (): Controller => {
  return new LoadArticleByIdController(makeIdValidation(), makeDbLoadArticleById())
}
