import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization

  if (!authToken) {
    return response.status(401).json({
      errorCode: "token.invalid"
    })
  }

  try {
    const [_, token] = authToken.split(" ")
    const { sub } = verify(token, process.env.JWT_SECRET) as { sub: string }

    request.user_id = sub

    return next()
  } catch (e) {
    return response.status(401).json({
      errorCode: "token.expired"
    })
  }
}
