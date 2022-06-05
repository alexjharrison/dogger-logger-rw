import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import WalkForm from 'src/components/Walk/WalkForm'

const CREATE_WALK_MUTATION = gql`
  mutation CreateWalkMutation($input: CreateWalkInput!) {
    createWalk(input: $input) {
      id
    }
  }
`

const NewWalk = () => {
  const [createWalk, { loading, error }] = useMutation(CREATE_WALK_MUTATION, {
    onCompleted: () => {
      toast.success('Walk created')
      navigate(routes.walks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, { dogId: parseInt(input.dogId), walkerId: parseInt(input.walkerId), })
    createWalk({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Walk</h2>
      </header>
      <div className="rw-segment-main">
        <WalkForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewWalk
