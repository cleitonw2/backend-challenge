import axios from 'axios'
import { ArticleApi } from '@/infra/api'

jest.mock('axios', () => ({
  async get (): Promise<any> {
    return new Promise(resolve => resolve({
      value: 'any_value'
    }))
  }
}))

const makeSut = (): ArticleApi => new ArticleApi()

describe('ArticleApi', () => {
  it('Should call get with correct param', async () => {
    const sut = makeSut()
    const getSpy = jest.spyOn(axios, 'get')
    await sut.getAll('any_url')
    expect(getSpy).toHaveBeenCalledWith('any_url')
  })
})
