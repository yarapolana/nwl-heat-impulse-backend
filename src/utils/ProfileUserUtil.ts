import prismaClient from '../prisma'

export async function getUserProfile(id: string) {
  const user = await prismaClient.user.findFirst({
    where: {
      id
    }
  })

  return user
}