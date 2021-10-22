import axios from 'axios'
import prismaClient from '../prisma'
import { sign } from 'jsonwebtoken'

interface IAccessTokenResponse {
  access_token: string
}

interface IUserResponse {
  id: number
  avatar_url: string
  login: string
  name: string
}

type User = IUserResponse

export async function getAccessToken(code: string) {
  const accessTokenUrl = 'https://github.com/login/oauth/access_token'

  const { data } = await axios.post<IAccessTokenResponse>(accessTokenUrl, null, {
    params: {
      code,
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET
    },
    headers: {
      'Accept': 'application/json'
    }
  })

  if(!data) console.error('getAccessToken: Data is not available', data)

  return data
}

export async function getGithubUserData({ access_token }: IAccessTokenResponse) {
  const userUrl = 'https://api.github.com/user'

  const { data } = await axios.get<IUserResponse>(userUrl, {
    headers: {
      authorization: `Bearer ${access_token}`,
      'Accept': 'application/json'
    }
  })

  if(!data) console.error('getGithubUserData: Data is not available', data)

  return data
}

async function checkIfUserExists(id: number) {
  const data = await prismaClient.user.findFirst({
    where: {
      github_id: id
    }
  })

  if(!data) console.error('getGithubUserData: Data is not available', data)
  return data
}

export async function createUser({id, avatar_url, login, name}: User) {
  const userExists = await checkIfUserExists(id)

  console.log('user does not exist', userExists)
  console.log('user is being created', {id, avatar_url, login, name})
  if(!userExists) {
    const user = await prismaClient.user.create({
      data: {
        github_id: id,
        avatar_url,
        login,
        name,
      }
    })

    console.log('user was created', user)

    const token = sign({
      user: {
        name: user.name,
        avatar_url: user.avatar_url,
        id: user.id,
      }
    }, process.env.JWT_SECRET, {
      subject: user.id,
      expiresIn: '1d'
    })
    if(!user) console.error('createUser create: Data is not available')

    return { user, token }
  }
  if(!userExists) console.error('createUser userExists: Data is not available')

  return userExists
}
