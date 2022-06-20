import { NavLink, routes } from '@redwoodjs/router'

const NavHeader = () => {
  const navRoutes: { text: string; to: string }[] = [
    {
      text: 'Dogs',
      to: routes.dogs(),
    },
    {
      text: 'Walks',
      to: routes.walks(),
    },
    {
      text: 'People',
      to: routes.users(),
    },
  ]
  return (
    <div>
      <header className="flex border-b border-gray-300 px-3 py-4 items-center">
        <h1 className="text-3xl text-blue-700 mr-auto">
          <NavLink activeClassName="" to="/">
            Dogger Logger
          </NavLink>
        </h1>
        <nav>
          {navRoutes.map((route) => (
            <NavLink
              className="ml-2"
              activeClassName="font-bold"
              key={route.text}
              to={route.to}
            >
              {route.text}
            </NavLink>
          ))}
        </nav>
      </header>
    </div>
  )
}

export default NavHeader
