import Logo from './assets/logo.png'

function App() {
  return (
    <>
      <div className="px-4 py-6 w-full drop-shadow-md bg-white">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-3">
            <img src={Logo} width={190} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
