import type { EditDogById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DogForm from 'src/components/Dog/DogForm'

export const QUERY = gql`
  query EditDogById($id: Int!) {
    dog: dog(id: $id) {
      id
      name
      gender
      weight
      breed
      neutered
      status
      photoUrl
      birthday
      createdAt
      updatedAt
    }
  }
`
const UPDATE_DOG_MUTATION = gql`
  mutation UpdateDogMutation($id: Int!, $input: UpdateDogInput!) {
    updateDog(id: $id, input: $input) {
      id
      name
      gender
      weight
      breed
      neutered
      status
      photoUrl
      birthday
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ dog }: CellSuccessProps<EditDogById>) => {
  const [updateDog, { loading, error }] = useMutation(UPDATE_DOG_MUTATION, {
    onCompleted: () => {
      toast.success('Dog updated')
      navigate(routes.dogs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateDog({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Dog {dog.id}</h2>
      </header>
      <div className="rw-segment-main">
        <DogForm dog={dog} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
