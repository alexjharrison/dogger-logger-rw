import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.DogCreateArgs>({
  dog: {
    one: { data: { name: 'String', gender: 'MALE' } },
    two: { data: { name: 'String', gender: 'MALE' } },
  },
})

export type StandardScenario = typeof standard
