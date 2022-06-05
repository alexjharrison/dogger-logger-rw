import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type WalkLayoutProps = {
  children: React.ReactNode
}

const WalksLayout = ({ children }: WalkLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.walks()}
            className="rw-link"
          >
            Walks
          </Link>
        </h1>
        <Link
          to={routes.newWalk()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Walk
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default WalksLayout
