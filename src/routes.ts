import { Router } from 'express'

import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateMessageController } from './controllers/CreateMessageController';
import { GetLastThreeController } from './controllers/GetLastThreeController';
import { ProfileUserController } from './controllers/ProfileUserController';
import { ensureAuthenticated } from './middleware/ensureAuthenticated';

const routes = Router()

routes.post('/authenticate', new AuthenticateUserController().handle)
routes.post('/messages', ensureAuthenticated, new CreateMessageController().handle)
routes.get('/messages/latest', ensureAuthenticated, new GetLastThreeController().handle)
routes.get('/profile', ensureAuthenticated, new ProfileUserController().handle)

routes.get('/github', (request, response) => {
  response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
})

routes.get('/signin/callback', (request, response) => {
  const { code } = request.query

  return response.json(code)
})

export { routes }
