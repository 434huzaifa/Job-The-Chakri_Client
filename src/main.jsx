import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,Outlet,RouterProvider,} from "react-router-dom";
import App from './App';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Details from './Details';
import AddJob from './AddJob';
import PostedJob from './PostedJob';
import Bids from './Bids';
import BidRequest from './BidRequest';
const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:'/jobdetails/:id',
        element:<Details></Details>
      },
      {
        path:"/addjob",
        element:<AddJob></AddJob>
      },
      {
        path:'/postedjob',
        element:<PostedJob></PostedJob>
      },
      {
        path:"/bids",
        element:<Bids></Bids>
      },
      {
        path:"/bidrequest",
        element:<BidRequest></BidRequest>
      },
    ]
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
     <Outlet></Outlet>
  </React.StrictMode>,
)
