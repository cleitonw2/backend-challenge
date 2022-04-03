import { ValidateFieldType } from '@/validation'
import { InvalidParamError } from '@/presentation/errors'

const mockObject = (): object => ({
  id: Math.random(),
  featured: false,
  title: 'any_title',
  url: 'any_url'
})

const makeSut = (fields: string[], fieldType: any): ValidateFieldType => {
  return new ValidateFieldType(fields, fieldType)
}

describe('ValidateFieldType', () => {
  it('Should return InvalidParamError if validation fails', () => {
    const article = mockObject()
    const error1 = makeSut(['title', 'url', 'id'], '').validate(article)
    const error2 = makeSut(['id', 'title'], 0).validate(article)
    const error3 = makeSut(['featured', 'url'], true).validate(article)
    expect(error1).toEqual(new InvalidParamError('id'))
    expect(error2).toEqual(new InvalidParamError('title'))
    expect(error3).toEqual(new InvalidParamError('url'))
  })
})
