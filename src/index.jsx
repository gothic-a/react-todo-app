import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import ErrorBoundry from './components/hoc/ErrorBoundry'

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundry>
      <App />
    </ErrorBoundry>
  </React.StrictMode>,
  document.getElementById('root')
);
