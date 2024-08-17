import {createBrowserRouter,} from "react-router-dom";
import App from "../App";
import Home from "../assets/pages/Home";
import About from "../assets/pages/About";
import CreateJob from "../assets/pages/CreateJob";
import MyJobs from "../assets/pages/MyJobs";
import SalaryPage from "../assets/pages/SalaryPage";
import UpdateJob from "../assets/pages/UpdateJob";
import Login from "../Components/Login";
import JobDetails from "../assets/pages/JobDetails";
import Signup from "../Components/Signup";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {path: "/", element:<Home/> },
        {
          path:"/post-job",
          element:<CreateJob/>
          
        },
        {
          path:"/my-job",
          element:<MyJobs/>
          
        },
        {
          path:"/salary",
          element:<SalaryPage/>
          
        },
        {
          path: "edit-job/:id",
          element:<UpdateJob/>,
          loader:({params}) => fetch(`http://localhost:5000/all-jobs/${params.id}`)
        },
        {
          path: "/job/:id",
          element: <JobDetails/>
        } 
      ],
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/signup",
      element: <Signup/>
    }
  ]);



    export default router; 