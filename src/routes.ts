import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { Router } from 'express'

const routes = Router()

routes.post('/authenticate', new AuthenticateUserController().handle)

routes.get('/github', (request, response) => {
  response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
})

routes.get('/signin/callback', (request, response) => {
  const { code } = request.query

  return response.json(code)
})

export { routes }