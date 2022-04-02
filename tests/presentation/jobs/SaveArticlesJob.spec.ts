import { SaveArticlesJob } from '@/presentation/jobs'
import { SaveArticlesSpy } from '../mocks'

type SutTypes = {
  sut: SaveArticlesJob
  saveArticlesSpy: SaveArticlesSpy
}

const makeSut = (): SutTypes => {
  const saveArticlesSpy = new SaveArticlesSpy()
  const sut = new SaveArticlesJob(saveArticlesSpy)
  return {
    sut,
    saveArticlesSpy
  }
}

describe('SaveArticles Job', () => {
  it('Should call SaveArticle with correct params', async () => {
    const { sut, saveArticlesSpy } = makeSut()
    await sut.execute('any_default_url', 'any_url')
    expect(saveArticlesSpy.defaultUrl).toBe('any_default_url')
    expect(saveArticlesSpy.url).toBe('any_url')
  })
})
