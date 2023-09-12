import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react';
import { Loader } from './components'
import {
  Layout, Blog, CardSidebar, Cart, Checkout, Contact, Home, ProductComparison, Shop, SingleProduct, ErrorPage
} from './Pages';




function App() {

  return (
    <Layout>
      <Routes>
        <Route path='/home' element={
          <Suspense fallback={'home yuklanmoqda'
            // <Loader />
          }>
            <Home />
          </Suspense>
        } />
        <Route path='/blog' element={
          <Suspense fallback={'yuklanmoqda'
            // <Loader />
          }>
            <Blog />
          </Suspense>
        } />
        <Route path='/cardSidebar' element={
          <Suspense fallback={'yuklanmoqda'
            // <Loader />
          }>
            <CardSidebar />
          </Suspense>
        } />
        <Route path='/cart' element={
          <Suspense fallback={'yuklanmoqda'
            // <Loader />
          }>
            <Cart />
          </Suspense>
        } />
        <Route path='/checkout' element={
          <Suspense fallback={'yuklanmoqda'
            // <Loader />
          }>
            <Checkout />
          </Suspense>
        } />
        <Route path='/contact' element={
          <Suspense fallback={'yuklanmoqda'
            // <Loader />
          }>
            <Contact />
          </Suspense>
        } />
        <Route path='/productComparison' element={
          <Suspense fallback={'yuklanmoqda'
            // <Loader />
          }>
            <ProductComparison />
          </Suspense>
        } />
        <Route path='/shop' element={
          <Suspense fallback={'yuklanmoqda'
            // <Loader />
          }>
            <Shop />
          </Suspense>
        } />
        <Route path='/singleProduct' element={
          <Suspense fallback={'yuklanmoqda'
            // <Loader />
          }>
            <SingleProduct />
          </Suspense>
        } />
        <Route path='*' element={
          <Suspense fallback={'yuklanmoqda'
            // <Loader />
          }>
            <ErrorPage />
          </Suspense>
        } />
      </Routes>
    </Layout>
  )
}

export default App
