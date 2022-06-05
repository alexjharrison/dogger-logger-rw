import type { FindDogById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Dog from 'src/components/Dog/Dog'

export const QUERY = gql`
  query FindDogById($id: Int!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Dog not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ dog }: CellSuccessProps<FindDogById>) => {
  return <Dog dog={dog} />
}
