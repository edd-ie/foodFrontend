import { useState } from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState([])
  const [login, setLogin] = useState(false)

  const router = createBrowserRouter([
      {
        path: "/",
        element: <Home user={user} setUser={setUser} setLogin={setLogin}/>
      },
      {
        path: "/customer/login",
        element: <CustomerLogin user={user} setUser={setUser} login={login} setLogin={setLogin}/>
      },
      {
        path: "/customer/signup",
        element: <CustomerSignUp user={user} setUser={setUser} login={login} setLogin={setLogin}/>
      },
      {
        path: "/restaurant/login",
        element: <RestaurantLogin user={user} setUser={setUser} login={login} setLogin={setLogin}/>
      },
      {
        path: "/restaurant/signup",
        element: <RestaurantSignUp user={user} setUser={setUser} login={login} setLogin={setLogin}/>
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


import Home from './Home'
import CustomerLogin from './components/customer/loginSignup/Login'
import CustomerSignUp from './components/customer/loginSignup/SignUp'
import RestaurantLogin from './components/restaurant/loginSignup/Login'
import RestaurantSignUp from './components/restaurant/loginSignup/SignUp'


