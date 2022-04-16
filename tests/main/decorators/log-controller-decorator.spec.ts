import { LogControllerDecorator } from '@/main/decorators'
import { serverError } from '@/presentation/helpers'
import { LogErrorRepositorySpy } from '@/tests/data/mock-log'
import { ControllerSpy } from '@/tests/presentation/mocks'

type SutTypes = {
  sut: LogControllerDecorator
  controllerSpy: ControllerSpy
  logErrorRepositorySpy: LogErrorRepositorySpy
}

const makeSut = (): SutTypes => {
  const controllerSpy = new ControllerSpy()
  const logErrorRepositorySpy = new LogErrorRepositorySpy()
  const sut = new LogControllerDecorator(controllerSpy, logErrorRepositorySpy)
  return {
    sut,
    controllerSpy,
    logErrorRepositorySpy
  }
}

describe('LogController Decorator', () => {
  it('Should call Controller with correct params', async () => {
    const { sut, controllerSpy } = makeSut()
    const request = {
      value: 'any_value'
    }
    await sut.handle(request)
    expect(controllerSpy.request).toEqual(request)
  })

  it('Should call LogErrorRepo with correct error if Controller returns a server error', async () => {
    const { sut, controllerSpy, logErrorRepositorySpy } = makeSut()
    const error = new Error('fatal_error')
    controllerSpy.httpResponse = serverError(error)
    const httpResponse = await sut.handle('')
    expect(logErrorRepositorySpy.stack).toEqual(error.stack)
    expect(httpResponse.statusCode).toBe(500)
  })
})
