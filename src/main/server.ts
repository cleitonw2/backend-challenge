import 'module-alias/register'
import { MongoHelper } from '@/infra/repositories'
import cron from 'node-cron'
import { app } from './app'
import { env } from './config/env'
import { makeSaveArticlesJob } from './factories/jobs'

MongoHelper.connect(env.mongoUrl).then(() => {
  app.listen(env.port, async () => {
    console.log('server is runnig!')
    await makeSaveArticlesJob().execute(env.defaultUrl, env.url)

    cron.schedule('0 0 9 * * *', async () => {
      await makeSaveArticlesJob().execute(env.defaultUrl, env.url)
    })
  })
}).catch(console.error)
