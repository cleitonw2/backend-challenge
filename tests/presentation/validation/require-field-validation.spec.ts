import { RequiredFieldValidation } from '@/validation'
import { MissingParamError } from '@/presentation/errors'

const makeSut = (): RequiredFieldValidation => new RequiredFieldValidation('field')

describe('ValidateFieldType', () => {
  it('Should return MissingParamError if validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({})
    expect(error).toEqual(new MissingParamError('field'))
  })

  it.todo('Should return null if validation success')
})
