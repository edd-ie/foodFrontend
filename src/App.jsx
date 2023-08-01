import { useState } from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './App.css'


function App() {
  const [user, setUser] = useState([])
  const [login, setLogin] = useState(false)
  const [resId, setResId] = useState([])
  const [foodId, setFoodId] = useState([])

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
      },
      {
        path: "/customer/cart",
        element: <Cart user={user} setUser={setUser} login={login} setLogin={setLogin}/>
      },
      {
        path: "/customer/food",
        element: <Food user={user} setUser={setUser} login={login} setLogin={setLogin}/>
      },
      {
        path: "/customer/homepage",
        element: <Homepage user={user} setUser={setUser} login={login} setLogin={setLogin}/>
      },
      {
        path: "/customer/restaurant",
        element: <Restaurant user={user} setUser={setUser} login={login} setLogin={setLogin}/>
      },
      {
        path: "/customer/menu",
        element: <Menu user={user} setUser={setUser} login={login} setLogin={setLogin}/>
      },
      {
        path: "/customer/reviews",
        element: <Review user={user} resId={resId} foodId={foodId}/>
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
import Cart from './components/customer/pages/Cart'
import Food from './components/customer/pages/Food'
import Homepage from './components/customer/pages/Homepage'
import Restaurant from './components/customer/pages/Restaurant'
import Menu from './components/customer/pages/Menu'
import Review from './components/customer/pages/Reviews'


