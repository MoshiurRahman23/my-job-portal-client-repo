import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import LogIn from "../pages/LogIn/LogIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import JobApply from "../pages/JobApply/JobApply";
import PrivateRoute from "./PrivateRoute";
import MyApplications from "../pages/MyApplications/MyApplications";
import About from "../pages/About/About";
import AddJob from "../pages/AddJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplicantes from "../pages/MyPostedJobs/ViewApplicantes";
import Application from "../pages/Application/Application";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'applications',
        element:<Application/>,
        loader:()=>fetch('http://localhost:5000/applications').then(res => res?.json()),
      },
      {
        path: "jobs/:id",
        element: <JobDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`).then(res => res?.json()),
      },
      {
        path: "jobApply/:id",
        element: (
          <PrivateRoute>
            <JobApply />
          </PrivateRoute>
        ),
      },
      {
        path: "myApplications",
        element: (
          <PrivateRoute>
            <MyApplications/>
          </PrivateRoute>
        ),
      },
      {
        path: "mypostedjobs",
        element: (
          <PrivateRoute>
            <MyPostedJobs/>
          </PrivateRoute>
        ),
      },
      {
        path: "applications/jobs/:job_id",
        element: (
          <PrivateRoute>
            <ViewApplicantes />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`)
          // fetch(`http://localhost:5000/hr/jobs/applications/${params.hr_email}`)
      },
      {
        path: "addjobs",
        element: (
          <PrivateRoute>
            <AddJob/>
          </PrivateRoute>
        ),
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
    ],
  },
]);

export default router;