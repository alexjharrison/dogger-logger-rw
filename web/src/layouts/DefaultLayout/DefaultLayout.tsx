import AppFooter from 'src/components/AppFooter/AppFooter'
import NavHeader from 'src/components/NavHeader/NavHeader'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="flex flex-col h-screen">
      <NavHeader />
      <main className="py-2 px-3 flex-1">{children}</main>
      <AppFooter />
    </div>
  )
}

export default DefaultLayout
