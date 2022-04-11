import components from './components'
import schemas from './schemas'
import paths from './paths'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Backend Challenge',
    description: 'Essa é a documentação da Api construida para um desafio de backend da Coodesh.',
    version: '1.0.0',
    contact: {
      name: 'Cleiton',
      email: 'cleitonwoycik@outlook.com'
    }
  },
  servers: [{
    url: '/'
  }],
  tags: [{
    name: 'Article'
  }],
  paths,
  schemas,
  components
}
