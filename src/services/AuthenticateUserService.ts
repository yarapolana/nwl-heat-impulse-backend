import { getAccessToken, getGithubUserData, createUser } from '../utils'

export class AuthenticateUserService {
  async execute(code: string) {     
    const accessTokenData = await getAccessToken(code)

    const userData = await getGithubUserData(accessTokenData)

    return await createUser(userData)
  }
}

/**
 * Receive github code(string)
 * Retrieve access_token from github
 * Retrieve user information from github
 * Verify if user exists in our database
 * If exists generate a new token if not we save the user to database and generate a new token
 * Return token with user information
 */
