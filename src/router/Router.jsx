import React from 'react'
import {
    createBrowserRouter,
  } from "react-router-dom";
import App from '../App';
import Home from '../pages/home/home';
import News from '../pages/newsroom/news';
import ViewNews from '../components/newsroom/view_news';
import Vision from '../pages/about/vision';
import Responsibilities from '../pages/about/responsibilities';
import People from '../pages/about/people';
import Agencies from '../pages/about/agencies';
import BudgetPage from '../pages/budget/budgetPage';
import News_Events from '../pages/news_events/News_Events';
import News_view from '../pages/news_events/news_view';
import Connect from '../pages/connect/connect';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <h1>This is an Error Page</h1>,
      children : [
        {
          path: "home",
          element: <Home/>
        },
        {
          path: "about",
          children: [
            {
              path: "vision",
              element : <Vision/>
            },
            {
              path: "responsibilities",
              element : <Responsibilities/>
            },
            {
              path: "people",
              element : <People/>
            },
            {
              path: "agencies_directorates_units",
              element : <Agencies/>
            }
          ]
        },
        {
          path: "newsroom",
          children : [
            {
              path : ":page",
              element : <News_Events/>
            },
            {
              path : "view/:id",
              element : <News_view/>
            }
          ]
        },
        {
          path: "budget",
          element: <BudgetPage/>
        },
        {
          path: "connect",
          element: <Connect/>
        },
      ]
    }
  ]);

  export default router;
  
