import {
  SaveArticlesRepository,
  CountArticlesRepository,
  LoadArticlesRepository,
  LoadArticleByIdRepository
} from '@/data/protocols'

const mokcArticle = (): LoadArticlesRepository.Result => ([{
  title: 'any_title',
  url: 'any_url',
  imageUrl: 'any_img_url',
  newsSite: 'any',
  publishedAt: 'any',
  launches: [{ id: 'any_id' }],
  events: [{ id: 122 }]
}])

export class SaveArticlesRepositorySpy implements SaveArticlesRepository {
  params: SaveArticlesRepository.Params

  async save (articles: SaveArticlesRepository.Params): Promise<void> {
    this.params = articles
  }
}

export class CountArticlesRepositorySpy implements CountArticlesRepository {
  resutl: number = 2

  async count (): Promise<number> {
    return Promise.resolve(this.resutl)
  }
}

export class LoadArticlesRepositorySpy implements LoadArticlesRepository {
  resutl: LoadArticlesRepository.Result = mokcArticle()

  async loadAll (): Promise<LoadArticlesRepository.Result> {
    return Promise.resolve(this.resutl)
  }
}

export class LoadArticleByIdRepositorySpy implements LoadArticleByIdRepository {
  resutl: LoadArticleByIdRepository.Result = mokcArticle()[0]

  async loadById (id: string): Promise<LoadArticleByIdRepository.Result> {
    return Promise.resolve(this.resutl)
  }
}
