import { Router } from 'express'
import { adaptRoute } from './adapters'
import { makeSaveArticleController, makeLoadArticlesController } from './factories/controllers'

const routes = Router()

routes.get('/articles', adaptRoute(makeLoadArticlesController()))

routes.post('/articles', adaptRoute(makeSaveArticleController()))

export { routes }
