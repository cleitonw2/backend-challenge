import axios from 'axios'
import { GetAllArticlesApi } from '@/data/protocols'

export class ArticleApi implements GetAllArticlesApi {
  async getAll (url: string): Promise<any> {
    const { data } = await axios.get(url)
    return data
  }
}
