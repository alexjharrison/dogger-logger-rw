import type {
  QueryResolvers,
  MutationResolvers,
  DogResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const dogs: QueryResolvers['dogs'] = () => {
  return db.dog.findMany()
}

export const dog: QueryResolvers['dog'] = ({ id }) => {
  return db.dog.findUnique({
    where: { id },
  })
}

export const createDog: MutationResolvers['createDog'] = async ({ input }) => {
  let conflicts = 1
  let newSlug = input.name
  while (!input.slug) {
    const count = await db.dog.count({ where: { slug: { equals: newSlug } } })
    if (count > 0) {
      newSlug = input.name + ++conflicts
    } else {
      input.slug = newSlug
    }
  }
  return db.dog.create({
    data: input,
  })
}

export const updateDog: MutationResolvers['updateDog'] = ({ id, input }) => {
  return db.dog.update({
    data: input,
    where: { id },
  })
}

export const deleteDog: MutationResolvers['deleteDog'] = ({ id }) => {
  return db.dog.delete({
    where: { id },
  })
}

export const Dog: DogResolvers = {
  Walk: (_obj, { root }) =>
    db.dog.findUnique({ where: { id: root.id } }).Walk(),
}
