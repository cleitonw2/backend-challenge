export const articleSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer'
    },
    featured: {
      type: 'boolean'
    },
    title: {
      type: 'string'
    },
    url: {
      type: 'string'
    },
    imageUrl: {
      type: 'string'
    },
    summary: {
      type: 'string'
    },
    newsSite: {
      type: 'string'
    },
    publishedAt: {
      type: 'string'
    },
    launches: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string'
          },
          provider: {
            type: 'string'
          }
        }
      }
    },
    events: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string'
          },
          provider: {
            type: 'string'
          }
        }
      }
    }
  }
}
