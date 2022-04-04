import { Router } from 'express'
import { adaptRoute } from './adapters'
import {
  makeSaveArticleController,
  makeLoadArticlesController,
  makeLoadArticleByIdController,
  makeDeleteArticleController
} from './factories/controllers'
import { makeUpdateArticleController } from './factories/controllers/update-article-controller-factory'

const routes = Router()

routes.get('/', (req, res) => {
  return res.json('Back-end Challenge 2021 🏅 - Space Flight News')
})

routes.get('/articles', adaptRoute(makeLoadArticlesController()))

routes.get('/articles/:id', adaptRoute(makeLoadArticleByIdController()))

routes.post('/articles', adaptRoute(makeSaveArticleController()))

routes.put('/articles/:id', adaptRoute(makeUpdateArticleController()))

routes.delete('/articles/:id', adaptRoute(makeDeleteArticleController()))

export { routes }
