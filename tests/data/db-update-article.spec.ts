import { DbUpdateArticle } from '@/data/usecases'
import { UpdateArticleRepositorySpy } from './mock-article'

type Sut = {
  updateArticleRepositorySpy: UpdateArticleRepositorySpy
  sut: DbUpdateArticle
}

const makeSut = (): Sut => {
  const updateArticleRepositorySpy = new UpdateArticleRepositorySpy()
  const sut = new DbUpdateArticle(updateArticleRepositorySpy)
  return {
    sut,
    updateArticleRepositorySpy
  }
}

describe('DbUpdateArticle UseCase', () => {
  it('Should call UpdateArticleRepository whit correct params', async () => {
    const { sut, updateArticleRepositorySpy } = makeSut()
    const params = updateArticleRepositorySpy.params
    params.id = Math.random()
    await sut.update(params)
    expect(updateArticleRepositorySpy.params).toEqual(params)
  })

  it.todo('Should throw if UpdateArticleRepository throws')
})
