import type { FindWalks } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Walks from 'src/components/Walk/Walks'

export const QUERY = gql`
  query FindWalks {
    walks {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No walks yet. '}
      <Link
        to={routes.newWalk()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ walks }: CellSuccessProps<FindWalks>) => {
  return <Walks walks={walks} />
}
