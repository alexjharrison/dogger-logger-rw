import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Walk/WalksCell'

const DELETE_WALK_MUTATION = gql`
  mutation DeleteWalkMutation($id: Int!) {
    deleteWalk(id: $id) {
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

const WalksList = ({ walks }) => {
  const [deleteWalk] = useMutation(DELETE_WALK_MUTATION, {
    onCompleted: () => {
      toast.success('Walk deleted')
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
    if (confirm('Are you sure you want to delete walk ' + id + '?')) {
      deleteWalk({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Dog id</th>
            <th>Walker id</th>
            <th>Time</th>
            <th>Length minutes</th>
            <th>Did poop</th>
            <th>Did pee</th>
            <th>Medical concerns</th>
            <th>Num jumps</th>
            <th>Jump handlage</th>
            <th>Num mouthings</th>
            <th>Mouthings handlage</th>
            <th>Dogs seen</th>
            <th>Dogs seen reacted</th>
            <th>Seen dog reaction</th>
            <th>Other concerns</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {walks.map((walk) => (
            <tr key={walk.id}>
              <td>{truncate(walk.id)}</td>
              <td>{truncate(walk.dogId)}</td>
              <td>{truncate(walk.walkerId)}</td>
              <td>{timeTag(walk.time)}</td>
              <td>{truncate(walk.lengthMinutes)}</td>
              <td>{checkboxInputTag(walk.didPoop)}</td>
              <td>{checkboxInputTag(walk.didPee)}</td>
              <td>{truncate(walk.medicalConcerns)}</td>
              <td>{truncate(walk.numJumps)}</td>
              <td>{truncate(walk.jumpHandlage)}</td>
              <td>{truncate(walk.numMouthings)}</td>
              <td>{truncate(walk.mouthingsHandlage)}</td>
              <td>{truncate(walk.dogsSeen)}</td>
              <td>{truncate(walk.dogsSeenReacted)}</td>
              <td>{truncate(walk.seenDogReaction)}</td>
              <td>{truncate(walk.otherConcerns)}</td>
              <td>{timeTag(walk.createdAt)}</td>
              <td>{timeTag(walk.updatedAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.walk({ id: walk.id })}
                    title={'Show walk ' + walk.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editWalk({ id: walk.id })}
                    title={'Edit walk ' + walk.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete walk ' + walk.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(walk.id)}
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

export default WalksList
