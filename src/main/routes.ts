import { Router } from 'express'
import { adaptRoute } from './adapters'
import { makeSaveArticleController } from './factories/controllers'

const routes = Router()

routes.post('/articles', adaptRoute(makeSaveArticleController()))

export { routes }
