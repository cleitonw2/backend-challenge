import { InvalidParamError } from '@/presentation/errors'
import { Validation } from '@/presentation/protocols'

export class ValidateFieldType implements Validation {
  constructor (
    private readonly fields: string[],
    private readonly fileType: any
  ) {}

  validate (input: any): Error | null {
    for (const field of this.fields) {
      if (typeof input[field] !== typeof this.fileType) {
        return new InvalidParamError(field)
      }
    }
    return null
  }
}
