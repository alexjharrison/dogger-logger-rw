import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //
    const users: Prisma.UserCreateManyArgs['data'] = [
      {
        email: 'a@a.a',
        firstName: 'Alex',
        lastName: 'Harrison',
        role: 'SUPERADMIN',
      },
      {
        email: 'b@b.b',
        firstName: 'bob',
        lastName: 'bobbo',
      },
    ]

    const dogs: Prisma.DogCreateManyArgs['data'] = [
      {
        name: 'Mabel',
        gender: 'FEMALE',
        weight: 130,
        birthday: new Date('9/13/15'),
      },
      {
        name: 'Frank',
        gender: 'MALE',
        weight: 60,
        birthday: new Date('1/29/20'),
      },
    ]

    const walks: Prisma.WalkCreateManyArgs['data'] = [
      {
        dogId: 1,
        walkerId: 2,
        didPee: true,
        didPoop: false,
        dogsSeen: 0,
        numJumps: 3,
        lengthMinutes: 47,
        numMouthings: 2,
        time: new Date(),
        dogsSeenReacted: 0,
      },
    ]
    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    // Promise.all(
    //
    // Change to match your data model and seeding needs
    //
    const userRecord = await db.user.createMany({ data: users })
    console.log(userRecord)
    const dogRecord = await db.dog.createMany({ data: dogs })
    console.log(dogRecord)
    const walkRecord = await db.walk.createMany({ data: walks })
    console.log(walkRecord)
    // )
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
