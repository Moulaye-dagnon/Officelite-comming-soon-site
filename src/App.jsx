import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { Home } from './page/Home'
import { SignUp } from './page/Sign_up'
const router = createBrowserRouter([
	{
		path: '/',
		element:<Home/>,
	},
	{

		path:'/Sign_Up',
		element:<SignUp/>,
	}
])

function App() {

  return <RouterProvider router={router} />
}

export default App
