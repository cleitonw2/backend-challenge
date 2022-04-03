import { SaveArticlesJob } from '@/presentation/jobs'
import { Job } from '@/presentation/protocols'
import { makeDbSaveArticles } from '../usecases'

export const makeSaveArticlesJob = (): Job => {
  return new SaveArticlesJob(makeDbSaveArticles())
}
