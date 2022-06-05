import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Dog/DogsCell'

const DELETE_DOG_MUTATION = gql`
  mutation DeleteDogMutation($id: Int!) {
    deleteDog(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const DogsList = ({ dogs }) => {
  const [deleteDog] = useMutation(DELETE_DOG_MUTATION, {
    onCompleted: () => {
      toast.success('Dog deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete dog ' + id + '?')) {
      deleteDog({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Weight</th>
            <th>Breed</th>
            <th>Neutered</th>
            <th>Status</th>
            <th>Photo url</th>
            <th>Birthday</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {dogs.map((dog) => (
            <tr key={dog.id}>
              <td>{truncate(dog.id)}</td>
              <td>{truncate(dog.name)}</td>
              <td>{formatEnum(dog.gender)}</td>
              <td>{truncate(dog.weight)}</td>
              <td>{truncate(dog.breed)}</td>
              <td>{checkboxInputTag(dog.neutered)}</td>
              <td>{formatEnum(dog.status)}</td>
              <td>{truncate(dog.photoUrl)}</td>
              <td>{timeTag(dog.birthday)}</td>
              <td>{timeTag(dog.createdAt)}</td>
              <td>{timeTag(dog.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.dog({ id: dog.id })}
                    title={'Show dog ' + dog.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editDog({ id: dog.id })}
                    title={'Edit dog ' + dog.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete dog ' + dog.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(dog.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DogsList
