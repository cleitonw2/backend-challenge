export interface CountArticlesRepository {
  count: () => Promise<number>
}
