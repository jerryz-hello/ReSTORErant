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
import ProductListing from './ProductListing'
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles'

const theme=createMuiTheme({
  palette:{
    primary:{
      main:'#c3e5ea'
    }
  },
  typography: {
    fontFamily: "'Economica', sans-serif",
    fontSize:16,
    button:{
      fontSize:'1rem'
    }
  }
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={App}></Route>
        <Route path="/store" component={Store}></Route>
        <Route path="/wholesaler" component={Wholesaler}></Route>
        <Route path="/checkout" component={Checkout}></Route>
        <Route path="/cart" component={ShoppingCart}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/register" component={Register}></Route>
        {/* <Route path="/LoginPageW" component={LoginPageW}></Route> */}
        <Route path="/product" component={AddProduct}></Route>
        <Route path="/product-listing" component={ProductListing}></Route>
    </Switch>
    </Router>
  </React.StrictMode>
  </ThemeProvider>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
