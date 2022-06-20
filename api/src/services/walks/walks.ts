import type {
  QueryResolvers,
  MutationResolvers,
  WalkResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const walks: QueryResolvers['walks'] = () => {
  return db.walk.findMany()
}

export const walk: QueryResolvers['walk'] = ({ id }) => {
  return db.walk.findUnique({
    where: { id },
  })
}

export const createWalk: MutationResolvers['createWalk'] = ({ input }) => {
  return db.walk.create({
    data: input,
  })
}

export const updateWalk: MutationResolvers['updateWalk'] = ({ id, input }) => {
  return db.walk.update({
    data: input,
    where: { id },
  })
}

export const deleteWalk: MutationResolvers['deleteWalk'] = ({ id }) => {
  return db.walk.delete({
    where: { id },
  })
}

export const Walk: WalkResolvers = {
  dog: (_obj, { root }) => db.walk.findUnique({ where: { id: root.id } }).dog(),
  walker: (_obj, { root }) =>
    db.walk.findUnique({ where: { id: root.id } }).walker(),
}
