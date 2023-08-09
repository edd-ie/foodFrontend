import { useEffect, useState } from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './App.css'


function App() {
  const [user, setUser] = useState([])
  console.log("file: App.jsx:8 -> App -> user:", user);
  const [login, setLogin] = useState(true)
  const [resId, setResId] = useState([])
  const [foodId, setFoodId] = useState([])

  useEffect(()=>{
    localStorage.getItem('foodChapUser') ? setLogin(true) : setLogin(false)
    let id = localStorage.getItem('foodChapUser')
    let page = localStorage.getItem('foodChapSide') == 'cust' ? 'customers' : 'restaurants'
    
    fetch(`https://backendfood-co7z.onrender.com/${page}/${id}`)
    .then(res=>res.json())
    .then(data=>setUser(data))


  },[])


  const router = createBrowserRouter([
      {
        path: "/",
        element:<Homepage user={user} setUser={setUser} login={login} setLogin={setLogin}/>
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
      },
      {
        path: "/navR",
        element: <NavR user={user} setLogin={setLogin}/>
      },
      {
        path: "/navC",
        element: <NavC  user={user} setLogin={setLogin}/>
      },
      {
        path: "/restaurant/dashboard",
        element: <Dashboard user={user} setUser={setUser} login={login} setLogin={setLogin}/>
      },
      {
        path: '/restaurant/staff',
        element: <Staff user={user}/>
      },
      {
        path: '/customer/profile',
        element: <ProfC user={user}/>
      },
      {
        path: '/restaurant/profile',
        element: <ProfR user={user}/>
      },
      {
        path: '/restaurant/orders',
        element: <Orders user={user}/>
      },
      {
        path: '/customer/tracking',
        element: <OrderTracking user={user}/>
      },
      {
        path: '/restaurant/inventory',
        element: <Inventory user={user}/>
      },
      {
        path: '/blog',
        element: <Blog/>
      },
      {
        path: '/blogPage',
        element: <BlogPage/>
      },
      {
        path: '/contact',
        element: <Contact user={user}/>
      },
      {
        path : '/Favourites',
        element : <Favourites user={user}/>
      }
    ]
  )


  return (
    <div className="App">
      {login&&<RouterProvider router={router}/>}
      {!login && <Home user={user} setUser={setUser} login={login} setLogin={setLogin}/>}
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
import NavR from './components/utility/NavR'
import NavC from './components/utility/NavC'
import Dashboard from './components/restaurant/Components/Dashboard'
import Staff from './components/restaurant/Components/Staff'
import ProfC from './components/utility/ProfC'
import ProfR from './components/utility/ProfR'
import Orders from './components/restaurant/Components/orders'
import OrderTracking from './components/customer/pages/OrderTracking'
import Inventory from './components/restaurant/Components/Inventory'
import Blog from './components/utility/Blog'
import BlogPage from './components/utility/BlogPage'
import Favourites from './components/customer/pages/Favourites';
import Contact from './components/utility/contact'