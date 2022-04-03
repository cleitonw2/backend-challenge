import { ValidationComposite } from '@/validation'
import { ValidationSpy } from '../mocks'

type SutTypes = {
  sut: ValidationComposite
  validationSpies: ValidationSpy[]
}

const makeSut = (): SutTypes => {
  const validationSpies = [new ValidationSpy(), new ValidationSpy(), new ValidationSpy()]
  const sut = new ValidationComposite(validationSpies)
  return {
    sut,
    validationSpies
  }
}

describe('ValidationComposite', () => {
  it('Should return Error if any validation fails', () => {
    const { sut, validationSpies } = makeSut()
    validationSpies[1].result = new Error()
    const error = sut.validate({})
    expect(error).toEqual(new Error())
  })

  it('Should return a first Error if any validation fails', () => {
    const { sut, validationSpies } = makeSut()
    validationSpies[1].result = new Error('any_error')
    validationSpies[2].result = new Error()
    const error = sut.validate({})
    expect(error).toEqual(new Error('any_error'))
  })
})
