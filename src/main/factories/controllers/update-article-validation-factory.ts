import { Validation } from '@/presentation/protocols'
import { RequiredFieldValidation, ValidationComposite, ValidateFieldType } from '@/validation'

export const makeUpdateArticleValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  const fields = ['id', 'title', 'url', 'imageUrl', 'newsSite', 'publishedAt', 'launches', 'events']
  for (const field of fields) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new ValidateFieldType(fields.slice(0, 1), 1))
  validations.push(new ValidateFieldType(fields.slice(1, 6), ''))
  validations.push(new ValidateFieldType(fields.slice(6, 8), []))
  return new ValidationComposite(validations)
}
