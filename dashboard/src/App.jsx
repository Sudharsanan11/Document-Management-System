import { FrappeProvider } from 'frappe-react-sdk'
import Navbar from './components/Navbar'
import Home from './components/Home'
function App() {

  return (
	<div className="App">
	<FrappeProvider  socketPort={9015} siteName={'roca.local'}>
			{/* <h1 className='text-red-900 bg-red-800'>Scott</h1> */}
			<Navbar />
			{/* <Home /> */}
	</FrappeProvider>
	</div>
  )
}

export default App
