import { UpdateArticle } from '@/domain/usecases'
import { UpdateArticleRepository } from '@/data/protocols'

export class DbUpdateArticle implements UpdateArticle {
  constructor (private readonly updateArticleRepository: UpdateArticleRepository) {}
  async update (data: UpdateArticle.Params): Promise<void> {
    await this.updateArticleRepository.update(data)
  }
}
