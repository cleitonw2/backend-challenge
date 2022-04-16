import { HttpResponse } from '@/presentation/protocols'

export const serverError = (serverError: Error): HttpResponse => ({
  statusCode: 500,
  body: {
    error: 'Internal server error: ' + serverError.message,
    stack: serverError.stack
  }
})

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: {
    error: error.message
  }
})

export const ok = (body: any): HttpResponse => ({
  statusCode: 200,
  body
})
