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
    ]
  },

  {
    path:'/allData',
    element:<ChefAllData></ChefAllData>,
    children:[
      {
        path:':id',
        element:<PrivetRoute><ChefPrivet></ChefPrivet></PrivetRoute>,
        loader:({params})=>fetch(`http://localhost:5000/allData/${params.id}`),
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
