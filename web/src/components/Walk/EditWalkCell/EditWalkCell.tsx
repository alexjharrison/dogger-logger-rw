import type { EditWalkById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import WalkForm from 'src/components/Walk/WalkForm'

export const QUERY = gql`
  query EditWalkById($id: Int!) {
    walk: walk(id: $id) {
      id
      dogId
      walkerId
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
const UPDATE_WALK_MUTATION = gql`
  mutation UpdateWalkMutation($id: Int!, $input: UpdateWalkInput!) {
    updateWalk(id: $id, input: $input) {
      id
      dogId
      walkerId
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ walk }: CellSuccessProps<EditWalkById>) => {
  const [updateWalk, { loading, error }] = useMutation(UPDATE_WALK_MUTATION, {
    onCompleted: () => {
      toast.success('Walk updated')
      navigate(routes.walks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      dogId: parseInt(input.dogId),
      walkerId: parseInt(input.walkerId),
    })
    updateWalk({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Walk {walk.id}</h2>
      </header>
      <div className="rw-segment-main">
        <WalkForm walk={walk} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
