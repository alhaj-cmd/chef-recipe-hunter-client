import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import ChefAllData from './components/chefAllData/ChefAllData.jsx';
import AuthPorvider from './components/Porvider/AuthPorvider.jsx';
import Register from './components/LogUser/Register.jsx';
import LogIn from './components/LogUser/Login.jsx';
import PrivetRoute from './components/PrivetRoute/PrivetRoute.jsx';
import ChefPrivet from './components/chefAllData/ChefPrivet.jsx';
import Blog from './components/Home/Blog.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:"login",
        element:<LogIn></LogIn>
      },
      {
        path:"register",
        element:<Register></Register>
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      }
    ]
  },

  {
    path:'/allData',
    element:<ChefAllData></ChefAllData>,
    children:[
      {
        path:':id',
        element:<PrivetRoute><ChefPrivet></ChefPrivet></PrivetRoute>,
        loader:({params})=>fetch(`https://b7a10-chef-recipe-hunter-server.vercel.app/allData/${params.id}`),
        children:[

        ]
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthPorvider>

   <RouterProvider router={router} />

    </AuthPorvider>
  </React.StrictMode>,
)
