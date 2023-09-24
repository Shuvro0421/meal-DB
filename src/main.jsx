import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import About from './component/About/About.jsx'
import Alls from './component/Alls/Alls.jsx'
import Beefs from './component/Beefs/Beefs.jsx'
import Categories from './component/Categories/Categories.jsx'
import ContactUs from './component/ContactUs/ContactUs.jsx'
import Food from './component/Food/Food.jsx'
import Header from './component/Header/Header.jsx'
import Home from './component/Home/Home.jsx'
import Instructions from './component/Instructions/Instructions.jsx'
import NotFound from './component/NotFound/NotFound.jsx'
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path : '/',
        loader : () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element : <Alls></Alls>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/categories',
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list'),
        element: <Categories></Categories>,
        children: [
          {
            path: '/categories',
            loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Beef'),
            element : <Beefs></Beefs>
          },
          {
            path: '/categories/:strCategory',
            loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.strCategory}`),
            element: <Food></Food>
          }

        ]
      },

      {
        path: '/contactUs',
        element: <ContactUs></ContactUs>
      },
      {
        path: '/recipe/:idMeal',
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`),
        element: <Instructions></Instructions>
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
