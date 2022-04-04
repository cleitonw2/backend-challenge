import { ValidationComposite, ValidateFieldType } from '@/validation'

export const makeIdValidation = (): ValidationComposite => {
  return new ValidationComposite([new ValidateFieldType(['id'], 1)])
}
