import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Book from './pages/Book';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Criação das rotas da aplicação
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/book/:id",
    element: <Book />,
  }
])

// Renderiza a aplicação
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
