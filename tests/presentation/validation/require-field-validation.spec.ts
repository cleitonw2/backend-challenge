import { RequiredFieldValidation } from '@/validation'
import { MissingParamError } from '@/presentation/errors'

const makeSut = (): RequiredFieldValidation => new RequiredFieldValidation('field')

describe('ValidateFieldType', () => {
  it('Should return MissingParamError if validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({})
    expect(error).toEqual(new MissingParamError('field'))
  })

  it('Should return null if validation success', () => {
    const sut = makeSut()
    const error = sut.validate({ field: 'any_field' })
    expect(error).toBe(null)
  })
})
