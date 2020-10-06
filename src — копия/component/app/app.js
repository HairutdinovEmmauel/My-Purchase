import React from 'react';
import './app.css'

import AppHeader from '../app-header'
import { Switch, Route } from 'react-router-dom';
import ShoppingCartTable from '../shopping-cart-table';
import Content from '../content';
import FructList from '../fruct-list';

const App = () => {
  return (
      <div>
        <AppHeader />
          <Switch>
            <Route path={"/"} component={FructList} exact/>
            <Route path={"/shopping-cart-table"} component={ShoppingCartTable} />
        </Switch>
      </div>
  )
}

export default App;
