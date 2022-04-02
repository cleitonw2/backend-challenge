import {
  SaveArticlesRepository,
  CountArticlesRepository,
  LoadArticlesRepository,
  LoadArticleByIdRepository,
  DeleteArticleRepository,
  UpdateArticleRepository,
  GetAllArticlesApi,
  LoadDateOfLastArticleRepository
} from '@/data/protocols'

const mokcArticle = (): LoadArticlesRepository.Result => ([{
  id: Math.random(),
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
  params: LoadArticlesRepository.Params

  async loadAll (data: LoadArticlesRepository.Params): Promise<LoadArticlesRepository.Result> {
    this.params = data
    return Promise.resolve(this.resutl)
  }
}

export class LoadArticleByIdRepositorySpy implements LoadArticleByIdRepository {
  resutl: LoadArticleByIdRepository.Result = mokcArticle()[0]

  async loadById (id: number): Promise<LoadArticleByIdRepository.Result> {
    return Promise.resolve(this.resutl)
  }
}

export class DeleteArticleRepositorySpy implements DeleteArticleRepository {
  id: number

  async delete (id: number): Promise<void> {
    this.id = id
    Promise.resolve()
  }
}

export class UpdateArticleRepositorySpy implements UpdateArticleRepository {
  params: UpdateArticleRepository.Params = {
    id: 1,
    article: mokcArticle()[0]
  }

  async update (data: UpdateArticleRepository.Params): Promise<void> {
    this.params = data
    Promise.resolve()
  }
}

export class GetAllArticlesApiSpy implements GetAllArticlesApi {
  url: string
  result = mokcArticle()

  async getAll (url: string): Promise<any> {
    this.url = url
    return Promise.resolve(this.result)
  }
}

export class LoadDateOfLastArticleRepositorySpy implements LoadDateOfLastArticleRepository {
  result = 'any_date'

  async loadDate (): Promise<string> {
    return Promise.resolve(this.result)
  }
}
