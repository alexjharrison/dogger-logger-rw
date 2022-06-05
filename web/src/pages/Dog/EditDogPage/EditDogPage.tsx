import EditDogCell from 'src/components/Dog/EditDogCell'

type DogPageProps = {
  id: number
}

const EditDogPage = ({ id }: DogPageProps) => {
  return <EditDogCell id={id} />
}

export default EditDogPage
