import { Provider as ReduxProvider } from 'react-redux';

import { RouterProvider } from 'react-router-dom';

import { appRouter } from './router/appRouter';
import { appStore } from './store/appStore';

import './styles/base.scss';

export const App = () => (
  <ReduxProvider store={appStore}>
    <RouterProvider router={appRouter} />
  </ReduxProvider>
);
