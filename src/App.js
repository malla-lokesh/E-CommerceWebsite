import './App.css';
import React from 'react';
import About from './Pages/About';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainNavigation from './Pages/MainNavigation';
import Store from './Pages/Store/Store';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavigation/>,
    children: [
      {
        path: "/",
        element: <Store/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/store",
        element: <Store/>
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;