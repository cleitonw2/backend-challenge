export interface SaveArticles {
  save: (defaultUrl: string, url: string) => Promise<void>
}
