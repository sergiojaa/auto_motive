import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Services from "./components/Services"
import Budget from "./components/Budget"
import Under3k from "./components/Under3k"
import Under5k from "./components/Under5k"



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children:[
        {
          path: '/',
          element: <Home/>
        },
        {
          path:'/about',
          element: <About/>
        },
        {
          path:'/contact',
          element: <Contact/>
        },
        {
          path:'/services',
          element: <Services/>
        },
        {
          path:'/budget',
          element: <Budget/>
        },
        {
          path:'/under3k',
          element: <Under3k/>
        },
        {
          path:'/under5k',
          element: <Under5k/>
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
