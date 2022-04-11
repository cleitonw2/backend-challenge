export const articlePath = {
  get: {
    tags: ['Article'],
    parameters: [{
      in: 'query',
      name: 'offset',
      schema: {
        type: 'integer'
      }
    }, {
      in: 'query',
      name: 'limit',
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
              $ref: '#/schemas/articles'
            }
          }
        }
      },
      404: {
        $ref: '#/components/notFound'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  },
  post: {
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
