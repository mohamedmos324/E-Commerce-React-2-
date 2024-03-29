import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";
import App from "./App";
import Allshop from "./Shop/Allshop";
import Allblog from "./Blog/Allblog"
import Allabout from "./About/Allabout";
import Allcontact from "./Contact/Allcontact";
import Allproducts from "./Products/Allproducts";
import Allcart from "./Cart/Allcart";
import { CartProvider } from "react-use-cart";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
      
  },
  {
    path: "shop",
    element: <Allshop/>,
  },
  {
    path: "blog",
    element: <Allblog/>,
  },
  {
    path: "about",
    element: <Allabout/>,
  },
  {
    path: "contact",
    element: <Allcontact/>,
  },
  {
    path: "products",
    element: <Allproducts/>,
  },
  {
    path: "cart",
    element: <Allcart/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
  
);





























































// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
