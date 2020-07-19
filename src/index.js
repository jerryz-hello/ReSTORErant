import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Store from './store'
import Wholesaler from './Wholesaler'
import Checkout from './Checkout'
import ShoppingCart from './ShoppingCart'
import LoginPage from './LoginPage'
// import LoginPageW from './LoginPageW'
import AddProduct from './AddProduct'
import Register from './Register'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={App}></Route>
        <Route path="/store" component={Store}></Route>
        <Route path="/Wholesaler" component={Wholesaler}></Route>
        <Route path="/checkout" component={Checkout}></Route>
        <Route path="/cart" component={ShoppingCart}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/Register" component={Register}></Route>
        {/* <Route path="/LoginPageW" component={LoginPageW}></Route> */}
        <Route path="/product" component={AddProduct}></Route>
    </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
