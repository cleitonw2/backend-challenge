export const homePath = {
  get: {
    tags: ['Article'],
    responses: {
      200: {
        description: 'Sucesso'
      },
      404: {
        $ref: '#/components/notFound'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}
