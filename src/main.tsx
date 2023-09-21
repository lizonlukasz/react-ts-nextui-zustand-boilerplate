import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage, Contact } from 'views';
import { App } from './App';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>404 page</h1>,
    children: [
      {
        path: 'app',
        element: <h1>App Placeholder</h1>,
      },
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
  {
    path: 'app',
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
