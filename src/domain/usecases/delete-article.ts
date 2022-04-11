export interface DeleteArticle {
  delete: (id: number) => Promise<void>
}
