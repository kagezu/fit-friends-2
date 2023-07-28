import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { checkAuthAction } from './store/user-process/user-api-actions';
import { store } from './store';
import { Provider } from 'react-redux';

store.dispatch(checkAuthAction())
  .finally(() => {
    const root = ReactDOM.createRoot(
      document.getElementById('root') as HTMLElement,
    );
    root.render(
      <React.StrictMode>
        <Provider store={store} >
          <App />
        </Provider>
      </React.StrictMode>
    );
  });
