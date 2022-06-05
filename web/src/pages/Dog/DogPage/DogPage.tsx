import DogCell from 'src/components/Dog/DogCell'

type DogPageProps = {
  id: number
}

const DogPage = ({ id }: DogPageProps) => {
  return <DogCell id={id} />
}

export default DogPage
