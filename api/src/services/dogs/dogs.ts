import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  DogResolvers,
} from 'types/graphql'

export const dogs: QueryResolvers['dogs'] = () => {
  return db.dog.findMany()
}

export const dog: QueryResolvers['dog'] = ({ id }) => {
  return db.dog.findUnique({
    where: { id },
  })
}

export const createDog: MutationResolvers['createDog'] = ({ input }) => {
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
