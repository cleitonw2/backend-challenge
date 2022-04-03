import { Validation } from '@/presentation/protocols'
import { RequiredFieldValidation, ValidationComposite, ValidateFieldType } from '@/validation'

export const makeSaveArticleValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  const fields = ['title', 'url', 'imageUrl', 'newsSite', 'publishedAt', 'launches', 'events']
  for (const field of fields) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new ValidateFieldType(fields.slice(0, 5), ''))
  validations.push(new ValidateFieldType(fields.slice(5, 7), []))
  return new ValidationComposite(validations)
}
