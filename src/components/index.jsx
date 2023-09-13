import { lazy } from "react";


const Header = lazy(() => import('./Header'))
const Loader = lazy(() => import('./Loader'))
const Img = lazy(() => import('./Img'))
const Item = lazy(() => import('./Item'))
const HeroSection = lazy(() => import('./HeroSection'))
const Button = lazy(() => import('./Button'))
const Main = lazy(() => import('./Main'))
const Footer = lazy(() => import('./Footer'))
const Span = lazy(() => import('./Span'))

export {
    Header,
    Loader,
    Img,
    Item,
    HeroSection,
    Button,
    Main,
    Footer,
    Span,
}