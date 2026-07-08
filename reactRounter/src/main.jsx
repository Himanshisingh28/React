import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import Root from './Root.jsx'
import About from './components/About/about.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[{
      path:"",
      element:<Home/>
    },
    {
      path:"about",
      element:<About/>
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
