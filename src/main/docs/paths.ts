import { homePath, articlePath, articleByIdPath } from './paths/'

export default {
  '/': homePath,
  '/articles': articlePath,
  '/articles/{id}': articleByIdPath
}
