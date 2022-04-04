import { ValidationComposite, ValidateFieldType } from '@/validation'

export const makeLoadArticleByIdValidation = (): ValidationComposite => {
  return new ValidationComposite([new ValidateFieldType(['id'], 1)])
}
