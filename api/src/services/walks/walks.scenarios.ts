import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.WalkCreateArgs>({
  walk: {
    one: {
      data: {
        time: '2022-06-05T20:13:10Z',
        lengthMinutes: 1854478,
        didPoop: true,
        didPee: true,
        numJumps: 3002614,
        numMouthings: 8874564,
        dogsSeen: 4310540,
        dogsSeenReacted: 6250192,
        dog: { create: { name: 'String', gender: 'MALE' } },
        walker: {
          create: {
            email: 'String9795612',
            firstName: 'String',
            lastName: 'String',
          },
        },
      },
    },
    two: {
      data: {
        time: '2022-06-05T20:13:10Z',
        lengthMinutes: 1811910,
        didPoop: true,
        didPee: true,
        numJumps: 4915563,
        numMouthings: 2404764,
        dogsSeen: 5207317,
        dogsSeenReacted: 4647940,
        dog: { create: { name: 'String', gender: 'MALE' } },
        walker: {
          create: {
            email: 'String4526935',
            firstName: 'String',
            lastName: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
