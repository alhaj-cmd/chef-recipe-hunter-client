import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import ChefAllData from './components/chefAllData/ChefAllData.jsx';
import ChefPrivet from './components/chefAllData/chefPrivet.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }
    ]
  },
  {
    path:'allData',
    element:<ChefAllData></ChefAllData>,
    children:[
      {
        path:':id',
        element:<ChefPrivet></ChefPrivet>,
        loader:({params})=>fetch(`http://localhost:5000/allData/${params.id}`)
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
