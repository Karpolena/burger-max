import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./component/Layout/Layout";
import BurgerBuilder from "./containers/burgerBuilder/BurgerBuilder";
import Checkout from "./containers/checkout/Checkout";
import Orders from "./containers/orders/Orders";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact={true} component={BurgerBuilder} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
