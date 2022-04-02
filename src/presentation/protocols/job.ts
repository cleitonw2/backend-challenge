export interface Job {
  execute: (defaultUrl: string, url: string) => Promise<void>
}
