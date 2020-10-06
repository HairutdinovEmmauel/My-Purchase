import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store'
import ErrorBoundry from './component/error-boundry';
import { FructstoreServiceProvider } from './component/fructstore-service-context';
import App from './component/app/';
import FructStoreService from './service/fructstore-service';

const fructstoreService = new FructStoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <FructstoreServiceProvider value={fructstoreService}>
        <Router>
          <App />
        </Router>
      </FructstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);

