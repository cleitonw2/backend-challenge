import 'module-alias/register'
import cron from 'node-cron'
import { app } from './app'
import { env } from './config/env'
import { makeSaveArticlesJob } from './factories/jobs'

app.listen(env.port, () => {
  console.log('server is runnig!')
  cron.schedule('0 0 9 * * *', async () => {
    await makeSaveArticlesJob().execute(env.defaultUrl, env.url)
  })
})
