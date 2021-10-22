import prismaClient from '../prisma'

export async function sendMessage({ text, user_id }: { text: string, user_id: string}) {
  return await prismaClient.message.create({
    data: {
      text,
      user_id
    },
    include: {
      user: true
    }
  })
} 