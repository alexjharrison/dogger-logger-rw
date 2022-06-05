import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import DogForm from 'src/components/Dog/DogForm'

const CREATE_DOG_MUTATION = gql`
  mutation CreateDogMutation($input: CreateDogInput!) {
    createDog(input: $input) {
      id
    }
  }
`

const NewDog = () => {
  const [createDog, { loading, error }] = useMutation(CREATE_DOG_MUTATION, {
    onCompleted: () => {
      toast.success('Dog created')
      navigate(routes.dogs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createDog({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Dog</h2>
      </header>
      <div className="rw-segment-main">
        <DogForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewDog
