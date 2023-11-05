import { createBrowserRouter } from 'react-router-dom';

import { baseLayout } from '../layouts/baseLayout';

import { CurrencyConverterPage } from 'pages/CurrencyConverter';
import { ExchangeRatesPage } from 'pages/ExchangeRates';

enum AppRoutes {
  CurrencyConverter = '/',
  ExchangeRates = '/exchange-rates',
}

export const appRouter = createBrowserRouter([
  {
    element: baseLayout,
    errorElement: <div>404</div>,
    children: [
      {
        path: AppRoutes.CurrencyConverter,
        element: <CurrencyConverterPage />,
      },
      {
        path: AppRoutes.ExchangeRates,
        element: <ExchangeRatesPage />,
      },
    ],
  },
]);
