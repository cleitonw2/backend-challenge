import { SaveArticles } from '@/domain/contracts'
import { CountArticlesRepository, GetAllArticlesApi, SaveArticlesRepository } from '@/data/protocols'
import { LoadDateOfLastArticleRepositorySpy } from '../mock-article'

export class DbSaveArticles implements SaveArticles {
  constructor (
    private readonly countRepository: CountArticlesRepository,
    private readonly getAllArticlesApi: GetAllArticlesApi,
    private readonly saveArticlesRepository: SaveArticlesRepository,
    private readonly loadDateOfLastArticleRepository: LoadDateOfLastArticleRepositorySpy
  ) {}

  async save (defaultUrl: string, url: string): Promise<void> {
    const count = await this.countRepository.count()
    let articles: any
    if (count === 0) {
      articles = await this.getAllArticlesApi.getAll(url)
    } else {
      const date = await this.loadDateOfLastArticleRepository.loadDate()
      articles = await this.getAllArticlesApi.getAll(defaultUrl + date)
    }
    await this.saveArticlesRepository.save(articles)
  }
}
