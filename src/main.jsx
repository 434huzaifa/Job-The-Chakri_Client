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
import Update from './Update';
import AllJob from './AllJob';
import HeadCover from './HeadCover';
const qc = new QueryClient();
const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    errorElement: <HeadCover img="/favico/warning.png" headTitle="Error"> <ErrorElement></ErrorElement></HeadCover>,
    children:[
      {
        path:'/',
        element:<HeadCover headTitle="Home" img="/briefcase.png"> <Home></Home></HeadCover>
      },
      {
        path:'/login',
        element:<HeadCover img="/favico/key.png" headTitle="login"> <Login></Login></HeadCover>
      },
      {
        path:"/register",
        element:<HeadCover img="/favico/register.png" headTitle="Register"> <Register></Register></HeadCover>
      },
      {
        path:'/jobdetails/:id',
        element:<Private> <HeadCover img="/favico/seo.png" headTitle="Job Details"> <Details></Details></HeadCover></Private>
      },
      {
        path:"/addjob",
        element:<Private> <HeadCover img="/favico/add.png" headTitle="Add Job"> <AddJob></AddJob></HeadCover></Private>
      },
      {
        path:'/postedjob',
        element:<Private> <HeadCover img="/favico/fair.png" headTitle="Posted Job"> <PostedJob></PostedJob> </HeadCover></Private>
      },
      {
        path:"/bids",
        element:<Private> <HeadCover img="/favico/bid.png" headTitle="My Bids"> <Bids></Bids></HeadCover></Private>
      },
      {
        path:"/bidrequest",
        element:<Private> <HeadCover img="/favico/auction.png"> <BidRequest></BidRequest> </HeadCover></Private>
      },
      {
        path:"/updatejob/:id",
        element:<Private> <HeadCover img="/favico/update.png"><Update></Update> </HeadCover> </Private>
      },
      {
        path:'/alljob',
        element:<HeadCover img="/favico/all.png" headTitle="All Job"> <AllJob></AllJob></HeadCover>
      }
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
