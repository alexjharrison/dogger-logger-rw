import EditWalkCell from 'src/components/Walk/EditWalkCell'

type WalkPageProps = {
  id: number
}

const EditWalkPage = ({ id }: WalkPageProps) => {
  return <EditWalkCell id={id} />
}

export default EditWalkPage
