import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SignUp from "../pages/Login/SignUp";
import Login from "../pages/Login/Login";
import SingleToyDetails from "../pages/SingleToyDetails/SingleToyDetails";
import AllToys from "../pages/AllToys/AllToys";
import AddToy from "../pages/AddToyPage/AddToy";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../pages/MyToys/MyToys";
import UpdateToyDetails from "../pages/MyToys/UpdateToyDetails";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/addtoy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/toy-details/:id",
        element: (
          <PrivateRoute>
            <SingleToyDetails></SingleToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://kids-wonders-server.vercel.app/toys/${params.id}`),
      },
      {
        path: "/updateToyDetails/:id",
        element: (
          <PrivateRoute>
            <UpdateToyDetails></UpdateToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://kids-wonders-server.vercel.app/toys/${params.id}`),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
