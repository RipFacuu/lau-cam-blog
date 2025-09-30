import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Define los tipos manualmente ya que no son enums
const Role = {
  AUTHOR: 'AUTHOR',
  EDITOR: 'EDITOR',
  ADMIN: 'ADMIN',
} as const

const PostStatus = {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
} as const

// ... resto de tu código seed