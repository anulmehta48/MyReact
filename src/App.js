import React from "react";
import ReactDOM from "react-dom/client";
import Header  from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import ReatraMenu from "./components/RestraMenu";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurant/:resId",
        element:<ReatraMenu/>
      },
    ]
  },
 
])

const root = ReactDOM.createRoot(document.getElementById("root"));

//   root.render(heading);
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
