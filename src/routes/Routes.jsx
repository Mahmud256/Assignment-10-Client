import React from "react";
import Root from "../layouts/Root";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import LoginAuth from "../pages/Login/LoginAuth";
import PrivateRoute from "./PrivateRoute";
import AddProduct from "../components/AddProduct/AddProduct";
import UpdateProduct from "../components/UpdateProduct/UpdateProduct";
import About from "../pages/About/About";
import ProductDetails from "../pages/Details/ProductDetails";
import AppleBrandDetails from "../pages/Brand/AppleBrandDetails";
import SamsungBrandDetails from "../pages/Brand/SamsungBrandDetails";
import SonyBrandDetails from "../pages/Brand/SonyBrandDetails";
import SingerBrandDetails from "../pages/Brand/SingerBrandDetails";
import LgBrandDetails from "../pages/Brand/LgBrandDetails";
import IntelBrandDetails from "../pages/Brand/IntelBrandDetails";
import Cart from "../pages/Cart/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/brands.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/login/auth',
                element: <LoginAuth></LoginAuth>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addproduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/details/:_id',
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: () => fetch('https://assignment-10-server-side-vert.vercel.app/product')
            },
            {
                path: '/updateproduct/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignment-10-server-side-vert.vercel.app/product/${params.id}`)
            },
            {
                path: "/apple",
                element: <AppleBrandDetails></AppleBrandDetails>,
                loader: () => fetch('https://assignment-10-server-side-vert.vercel.app/product')
            },
            {
                path: "/samsung",
                element: <SamsungBrandDetails></SamsungBrandDetails>,
                loader: () => fetch('https://assignment-10-server-side-vert.vercel.app/product')
            },
            {
                path: "/sony",
                element: <SonyBrandDetails></SonyBrandDetails>,
                loader: () => fetch('https://assignment-10-server-side-vert.vercel.app/product')
            },
            {
                path: "/singer",
                element: <SingerBrandDetails></SingerBrandDetails>,
                loader: () => fetch('https://assignment-10-server-side-vert.vercel.app/product')
            },
            {
                path: "/lg",
                element: <LgBrandDetails></LgBrandDetails>,
                loader: () => fetch('https://assignment-10-server-side-vert.vercel.app/product')
            },
            {
                path: "/intel",
                element: <IntelBrandDetails></IntelBrandDetails>,
                loader: () => fetch('https://assignment-10-server-side-vert.vercel.app/product')
            },
            {
                path: '/mycart',
                element: <PrivateRoute><Cart></Cart></PrivateRoute>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }
]);

export default router;