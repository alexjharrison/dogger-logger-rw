import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_WALK_MUTATION = gql`
  mutation DeleteWalkMutation($id: Int!) {
    deleteWalk(id: $id) {
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

const Walk = ({ walk }) => {
  const [deleteWalk] = useMutation(DELETE_WALK_MUTATION, {
    onCompleted: () => {
      toast.success('Walk deleted')
      navigate(routes.walks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete walk ' + id + '?')) {
      deleteWalk({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Walk {walk.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{walk.id}</td>
            </tr>
            <tr>
              <th>Dog id</th>
              <td>{walk.dogId}</td>
            </tr>
            <tr>
              <th>Walker id</th>
              <td>{walk.walkerId}</td>
            </tr>
            <tr>
              <th>Time</th>
              <td>{timeTag(walk.time)}</td>
            </tr>
            <tr>
              <th>Length minutes</th>
              <td>{walk.lengthMinutes}</td>
            </tr>
            <tr>
              <th>Did poop</th>
              <td>{checkboxInputTag(walk.didPoop)}</td>
            </tr>
            <tr>
              <th>Did pee</th>
              <td>{checkboxInputTag(walk.didPee)}</td>
            </tr>
            <tr>
              <th>Medical concerns</th>
              <td>{walk.medicalConcerns}</td>
            </tr>
            <tr>
              <th>Num jumps</th>
              <td>{walk.numJumps}</td>
            </tr>
            <tr>
              <th>Jump handlage</th>
              <td>{walk.jumpHandlage}</td>
            </tr>
            <tr>
              <th>Num mouthings</th>
              <td>{walk.numMouthings}</td>
            </tr>
            <tr>
              <th>Mouthings handlage</th>
              <td>{walk.mouthingsHandlage}</td>
            </tr>
            <tr>
              <th>Dogs seen</th>
              <td>{walk.dogsSeen}</td>
            </tr>
            <tr>
              <th>Dogs seen reacted</th>
              <td>{walk.dogsSeenReacted}</td>
            </tr>
            <tr>
              <th>Seen dog reaction</th>
              <td>{walk.seenDogReaction}</td>
            </tr>
            <tr>
              <th>Other concerns</th>
              <td>{walk.otherConcerns}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(walk.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(walk.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editWalk({ id: walk.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(walk.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Walk
