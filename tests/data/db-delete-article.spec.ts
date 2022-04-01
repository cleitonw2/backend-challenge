import { DbDeleteArticle } from '@/data/usecases'
import { DeleteArticleRepositorySpy } from './mock-article'

type Sut = {
  deleteArticleRepositorySpy: DeleteArticleRepositorySpy
  sut: DbDeleteArticle
}

const makeSut = (): Sut => {
  const deleteArticleRepositorySpy = new DeleteArticleRepositorySpy()
  const sut = new DbDeleteArticle(deleteArticleRepositorySpy)
  return {
    sut,
    deleteArticleRepositorySpy
  }
}

describe('DbDeleteArticle UseCase', () => {
  it('Should call DeleteArticleRepository with correct param', async () => {
    const { sut, deleteArticleRepositorySpy } = makeSut()
    const id = Math.random()
    await sut.delete(id)
    expect(deleteArticleRepositorySpy.id).toBe(id)
  })

  it('Should throw if DeleteArticleRepository throws', () => {
    const { sut, deleteArticleRepositorySpy } = makeSut()
    jest.spyOn(deleteArticleRepositorySpy, 'delete').mockRejectedValueOnce(new Error())
    const promise = sut.delete(Math.random())
    expect(promise).rejects.toThrow()
  })
})
