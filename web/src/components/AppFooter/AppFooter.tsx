const AppFooter = () => {
  return (
    <footer className="p-3 bg-gray-200 flex flex-col justify-center items-center">
      <p>
        Created By{' '}
        <a
          target="_blank"
          referrerPolicy="no-referrer"
          href="https://aharrison.xyz"
          rel="noreferrer"
        >
          Alex Harrison
        </a>
      </p>
      <pre>&copy; {new Date().getFullYear()}</pre>
    </footer>
  )
}

export default AppFooter
