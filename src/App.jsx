import './App.css'
import Contact from '../components/Contact'
import Country from '../components/Country'
import About from '../components/About'
import Home from '../components/Home'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Applayout from '../components/Applayout'
import Error from '../components/Error'
import Carddetails from '../components/Carddetails'


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Applayout/>,
      errorElement: <Error/> ,
      children : [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'about',
      element:<About/>
    },
    {
      path:'country',
      element:<Country/>
    },
    {
      path:'country/:id',
      element:<Carddetails/>
    },
    {
      path:'contact',
      element:<Contact/>
    },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router= {router} >

      </RouterProvider>
    </>
  )
}

export default App
