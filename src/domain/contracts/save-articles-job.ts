export interface SaveArticlesJob {
  save: (defaultUrl: string, url: string) => Promise<void>
}
