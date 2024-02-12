import React, { Suspense } from 'react';
import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
//import Cart from './pages/Cart';
//import FullPizza from './pages/FullPizza';
//import NotFound from './pages/NotFound';

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart'));
const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza" */ './pages/FullPizza'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/NotFound'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={
         //todo сделать нормальную загрузку
        <Suspense fallback={<h1>Идёт загрузка корзины...</h1>}>
         <Cart />
        </Suspense>
      } />
        <Route path="pizza/:id" element={
        <Suspense fallback={<h1>Идёт загрузка пиццы...</h1>}>
         <FullPizza />
        </Suspense>
        } />
        <Route path="*" element={
        <Suspense fallback={<h1>Загрузка...</h1>}>
         <NotFound />
        </Suspense>
        } />
      </Route>
    </Routes>
  );
}

export default App;
