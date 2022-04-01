export interface DeleteArticleRepository {
  delete: (id: number) => Promise<void>
}
