import { LogControllerDecorator } from '@/main/decorators'
import { ControllerSpy } from '@/tests/presentation/mocks'

type SutTypes = {
  sut: LogControllerDecorator
  controllerSpy: ControllerSpy
}

const makeSut = (): SutTypes => {
  const controllerSpy = new ControllerSpy()
  const sut = new LogControllerDecorator(controllerSpy)
  return {
    sut,
    controllerSpy
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
})
