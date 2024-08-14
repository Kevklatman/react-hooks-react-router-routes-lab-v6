import React from 'react';
import ReactDOM from 'react-dom/client';
import { routes } from './routes';
import './index.css';
import { RouterProvider ,createBrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={createBrowserRouter(routes)} />);

