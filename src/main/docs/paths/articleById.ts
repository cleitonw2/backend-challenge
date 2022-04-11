export const articleByIdPath = {
  get: {
    tags: ['Article'],
    parameters: [{
      in: 'path',
      name: 'id',
      required: true,
      schema: {
        type: 'integer'
      }
    }],
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/article'
            }
          }
        }
      },
      400: {
        $ref: '#/components/badRequest'
      },
      404: {
        $ref: '#/components/notFound'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  },
  put: {
    tags: ['Article'],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/article'
          }
        }
      }
    },
    parameters: [{
      in: 'path',
      name: 'id',
      required: true,
      schema: {
        type: 'integer'
      }
    }],
    responses: {
      200: {
        description: 'Sucesso'
      },
      400: {
        $ref: '#/components/badRequest'
      },
      404: {
        $ref: '#/components/notFound'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  },
  delete: {
    tags: ['Article'],
    parameters: [{
      in: 'path',
      name: 'id',
      required: true,
      schema: {
        type: 'integer'
      }
    }],
    responses: {
      200: {
        description: 'Sucesso'
      },
      400: {
        $ref: '#/components/badRequest'
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
