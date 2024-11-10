import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Services from "./components/Services"



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
