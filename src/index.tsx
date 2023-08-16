import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { checkAuthAction } from './store/user/user-api-actions';
import { store } from './store';
import { Provider } from 'react-redux';

const main = async () => {
  try {
    await store.dispatch(checkAuthAction());
  } finally {
    const root = ReactDOM.createRoot(
      document.getElementById('root') as HTMLElement,
    );

    root.render(
      <Provider store={store} >
        <App />
      </Provider>
    );
  }
};

main();
