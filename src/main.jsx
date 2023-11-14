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
import ErrorElement from './ErrorElement';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Private from './Private';
const qc = new QueryClient();
const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    errorElement:<ErrorElement></ErrorElement>,
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
        element:<Private> <Details></Details></Private>
      },
      {
        path:"/addjob",
        element:<Private><AddJob></AddJob></Private>
      },
      {
        path:'/postedjob',
        element:<Private><PostedJob></PostedJob></Private>
      },
      {
        path:"/bids",
        element:<Private><Bids></Bids></Private>
      },
      {
        path:"/bidrequest",
        element:<Private><BidRequest></BidRequest></Private>
      },
    ]
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider  client={qc}>
    <RouterProvider router={router} />
     <Outlet></Outlet>
     </QueryClientProvider>
  </React.StrictMode>,
)
