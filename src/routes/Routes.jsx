import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import Statistics from "../pages/Statistics";
import Products from "../components/Products";
import Details from "../components/Details";
import ContactUs from "../pages/ContactUs";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";

const routes = createBrowserRouter([
      {
            path: '/',
            element: <AppLayout />,
            errorElement: <ErrorPage />,
            children: [
                  {
                        path: '/',
                        element: <Home />,
                        loader: () => fetch('../categories.json'),
                        children: [
                              {
                                    path: '/',
                                    element: <Products />,
                                    loader: () => fetch('../products.json')
                              },
                              {
                                    path: '/category/:category',
                                    element: <Products />,
                                    loader: () => fetch('../products.json')
                              }
                        ],
                  },
                  {
                        path: '/statistics',
                        element: <Statistics />
                  },
                  {
                        path: '/dashboard',
                        element: <Dashboard />,
                        children: [
                              {
                                    path: 'cart',
                                    element: <Cart />
                              },
                              {
                                    path: 'wishlist',
                                    element: <Wishlist />
                              },
                        ],
                  },
                  {
                        path: '/contact',
                        element: <ContactUs />
                  },
                  {
                        path: '/detail/:detailId',
                        element: <Details />,
                        loader: () => fetch('../products.json')
                  }
            ],
      }
])

export { routes }