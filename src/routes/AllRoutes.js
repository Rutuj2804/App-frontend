// user routes
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import AddProduct from "../pages/add/AddProduct";
import Dashboard from "../pages/dashboard/Dashboard";
import Cart from "../pages/cart/Cart";
import ProductDetailPage from "../pages/detail page/ProductDetailPage";

// auth routes
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";

// imports
import { Navigate } from "react-router-dom";

export const userRoutes = [
    { path: '/home', component: <Home /> },
    { path: '/add-product', component: <AddProduct /> },
    { path: '/product', component: <Products /> },
    { path: '/dashboard', component: <Dashboard /> },
    { path: '/cart', component: <Cart /> },
    { path: '/product/:id', component: <ProductDetailPage /> },

    { path: '', component: <Navigate to="/home" /> },
]

export const authRoutes = [
    { path: '/login', component: <Login /> },
    { path: '/register', component: <Register /> },
]