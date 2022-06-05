import type { FindWalkById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Walk from 'src/components/Walk/Walk'

export const QUERY = gql`
  query FindWalkById($id: Int!) {
    walk: walk(id: $id) {
      id
      dogId
      userId
      time
      lengthMinutes
      didPoop
      didPee
      medicalConcerns
      numJumps
      jumpHandlage
      numMouthings
      mouthingsHandlage
      dogsSeen
      dogsSeenReacted
      seenDogReaction
      otherConcerns
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Walk not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ walk }: CellSuccessProps<FindWalkById>) => {
  return <Walk walk={walk} />
}
