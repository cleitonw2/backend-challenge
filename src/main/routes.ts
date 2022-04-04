import { Router } from 'express'
import { adaptRoute } from './adapters'
import {
  makeSaveArticleController,
  makeLoadArticlesController,
  makeLoadArticleByIdController
} from './factories/controllers'

const routes = Router()

routes.get('/articles', adaptRoute(makeLoadArticlesController()))

routes.get('/articles/:id', adaptRoute(makeLoadArticleByIdController()))

routes.post('/articles', adaptRoute(makeSaveArticleController()))

export { routes }
