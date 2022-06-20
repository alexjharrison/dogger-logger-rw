import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_DOG_MUTATION = gql`
  mutation DeleteDogMutation($id: Int!) {
    deleteDog(id: $id) {
      id
    }
  }
`

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

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const Dog = ({ dog }) => {
  const [deleteDog] = useMutation(DELETE_DOG_MUTATION, {
    onCompleted: () => {
      toast.success('Dog deleted')
      navigate(routes.dogs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete dog ' + id + '?')) {
      deleteDog({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Dog {dog.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{dog.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{dog.name}</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>{formatEnum(dog.gender)}</td>
            </tr>
            <tr>
              <th>Weight</th>
              <td>{dog.weight}</td>
            </tr>
            <tr>
              <th>Breed</th>
              <td>{dog.breed}</td>
            </tr>
            <tr>
              <th>Neutered</th>
              <td>{checkboxInputTag(dog.neutered)}</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>{formatEnum(dog.status)}</td>
            </tr>
            <tr>
              <th>Photo url</th>
              <td>{dog.photoUrl}</td>
            </tr>
            <tr>
              <th>Birthday</th>
              <td>{timeTag(dog.birthday)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(dog.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(dog.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editDog({ id: dog.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(dog.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Dog
