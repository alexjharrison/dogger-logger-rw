import WalkCell from 'src/components/Walk/WalkCell'

type WalkPageProps = {
  id: number
}

const WalkPage = ({ id }: WalkPageProps) => {
  return <WalkCell id={id} />
}

export default WalkPage
