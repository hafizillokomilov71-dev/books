import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/signIn";
import NotFount from "../pages/not-fount";

export const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "sign-up", element: <SignUp /> },
  { path: "sign-in", element: <SignIn /> },
  { path: "*" , element: <NotFount/>}
]);
