import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { checkAuthAction } from './store/user/user-api-actions';
import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const main = async () => {
  await store.dispatch(checkAuthAction());
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
  );
  root.render(
    <Provider store={store} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

main();
