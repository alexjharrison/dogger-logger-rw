import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: { email: 'String5852321', firstName: 'String', lastName: 'String' },
    },
    two: {
      data: { email: 'String5366875', firstName: 'String', lastName: 'String' },
    },
  },
})

export type StandardScenario = typeof standard
