import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cardapio from './routes/Cardapio';
import Root from './routes/root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "cardapio",
    element: <Cardapio />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
