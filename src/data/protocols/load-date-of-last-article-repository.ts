export interface LoadDateOfLastArticleRepository {
  loadDate: () => Promise<string>
}
