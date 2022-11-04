import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient

export const usePrisma = () => {
  if (prisma === undefined) {
    prisma = new PrismaClient({
      log: ['query', 'info', 'warn'],
    })
  }
  return prisma
}
