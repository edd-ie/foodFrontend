import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
      {
        path: "/",
        element: <Home/>
      }
    ]
  )

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
