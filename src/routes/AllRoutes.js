// user routes
import Home from "../pages/home/Home";
import AddProduct from "../pages/add/AddProduct";

// auth routes
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";

// imports
import { Navigate } from "react-router-dom";

export const userRoutes = [
    { path: '/home', component: <Home /> },
    { path: '/add-product', component: <AddProduct /> },

    { path: '', component: <Navigate to="/home" /> },
]

export const authRoutes = [
    { path: '/login', component: <Login /> },
    { path: '/register', component: <Register /> },
]