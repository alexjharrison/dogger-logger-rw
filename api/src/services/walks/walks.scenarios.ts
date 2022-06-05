import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.WalkCreateArgs>({
  walk: {
    one: {
      data: {
        time: 'String',
        lengthMinutes: 2089784,
        didPoop: true,
        didPee: true,
        numJumps: 4658337,
        numMouthings: 2470216,
        dogsSeen: 5130520,
        dogsSeenReacted: 488315,
        dog: { create: { name: 'String', gender: 'MALE' } },
        walker: {
          create: {
            email: 'String9532717',
            firstName: 'String',
            lastName: 'String',
          },
        },
      },
    },
    two: {
      data: {
        time: 'String',
        lengthMinutes: 8296417,
        didPoop: true,
        didPee: true,
        numJumps: 6275169,
        numMouthings: 4916642,
        dogsSeen: 8767374,
        dogsSeenReacted: 2405610,
        dog: { create: { name: 'String', gender: 'MALE' } },
        walker: {
          create: {
            email: 'String5462',
            firstName: 'String',
            lastName: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
