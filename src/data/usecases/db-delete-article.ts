import { DeleteArticle } from '@/domain/contracts'
import { DeleteArticleRepository } from '../protocols'

export class DbDeleteArticle implements DeleteArticle {
  constructor (private readonly deleteArticleRepository: DeleteArticleRepository) {}

  async delete (id: number): Promise<void> {
    await this.deleteArticleRepository.delete(id)
  }
}
