import { DeleteArticle } from '@/domain/usecases'
import { DeleteArticleRepository } from '../protocols'

export class DbDeleteArticle implements DeleteArticle {
  constructor (private readonly deleteArticleRepository: DeleteArticleRepository) {}

  async delete (id: number): Promise<void> {
    await this.deleteArticleRepository.delete(id)
  }
}
