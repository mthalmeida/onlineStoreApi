import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import ProductInfo from './Components/ProductInfo';
import ShoppingCart from './Components/ShoppingCart';
import Checkout from './Components/Checkout';

export default class App extends React.Component {
  render() {
    return (
      <div className="div">
        <BrowserRouter basename={ process.env.PUBLIC_URL }>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/shoppingCart" component={ ShoppingCart } />
            <Route
              exact
              path="/productInfo/:id"
              render={ (props) => (<ProductInfo { ...props } id="" />) }
            />
            <Route exact path="/checkout" component={ Checkout } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
