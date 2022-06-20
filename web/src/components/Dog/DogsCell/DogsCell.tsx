import type { FindDogs } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Dogs from 'src/components/Dog/Dogs'

export const QUERY = gql`
  query FindDogs {
    dogs {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No dogs yet. '}
      <Link to={routes.newDog()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ dogs }: CellSuccessProps<FindDogs>) => {
  return <Dogs dogs={dogs} />
}
