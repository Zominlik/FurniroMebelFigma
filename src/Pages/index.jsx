import { lazy } from 'react'

const Blog = lazy(() => import("./Blog"));
const Cart = lazy(() => import("./Cart"));
const CardSidebar = lazy(() => import("./CardSidebar"));
const Checkout = lazy(() => import("./Checkout"));
const Contact = lazy(() => import("./Contact"));
const Home = lazy(() => import("./Home"));
const Layout = lazy(() => import("./Layout"));
const ProductComparison = lazy(() => import("./ProductComparison"));
const Shop = lazy(() => import("./Shop"));
const SingleProduct = lazy(() => import("./SingleProduct"));
const ErrorPage = lazy(() => import("./ErrorPage"));

export {
    Blog,
    Cart,
    CardSidebar,
    Checkout,
    Contact,
    Home,
    Layout,
    ProductComparison,
    Shop,
    SingleProduct,
    ErrorPage,
}