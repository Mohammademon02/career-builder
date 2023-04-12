import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import JobDetails from './components/JobDetails/JobDetails';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/jobCategory.json')
      },
      
      {
        path: '/details/:detailsId',
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => fetch(`/featured.json`)
      },
      {
        path: 'appliedJobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
