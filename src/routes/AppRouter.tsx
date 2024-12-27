import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

// layouts
const MainLayout = lazy(() => import("@layouts/MainLayout/MainLayout"));
const ProfileLayout = lazy(
  () => import("@layouts/ProfileLayout/ProfileLayout")
);

// pages
const Home = lazy(() => import("@pages/Home"));
const Products = lazy(() => import("@pages/Products"));
const Categories = lazy(() => import("@pages/Categories"));
const AboutUs = lazy(() => import("@pages/AboutUs/AboutUs"));
const Login = lazy(() => import("@pages/Login"));
const Register = lazy(() => import("@pages/Register"));
const Cart = lazy(() => import("@pages/Cart"));
const Wishlist = lazy(() => import("@pages/Wishlist"));
const Account = lazy(() => import("@pages/Account"));
const Orders = lazy(() => import("@pages/Orders"));

import Error from "@pages/Error/Error";
import {
  LottieHandler,
  PageSuspenseLoadingFallback,
} from "@components/feedback";

//protected route
import ProtectedRoute from "@components/Auth/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",

    element: (
      <Suspense
        fallback={
          <div style={{ marginTop: "10%" }}>
            <LottieHandler
              type="cartLoading"
              message="Loading please wait..."
            />
          </div>
        }
      >
        <MainLayout />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <PageSuspenseLoadingFallback>
            <Home />
          </PageSuspenseLoadingFallback>
        ),
      },
      {
        path: "/categories/products/:prefix",
        element: (
          <PageSuspenseLoadingFallback>
            <Products />
          </PageSuspenseLoadingFallback>
        ),

        loader: ({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response("Bad Request", {
              status: 400,
              statusText: "Category not found",
            });
          }
          return true;
        },
      },
      {
        path: "categories",
        element: (
          <PageSuspenseLoadingFallback>
            <Categories />
          </PageSuspenseLoadingFallback>
        ),
      },
      {
        path: "/cart",
        element: (
          <PageSuspenseLoadingFallback>
            <Cart />
          </PageSuspenseLoadingFallback>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <ProtectedRoute>
            <PageSuspenseLoadingFallback>
              <Wishlist />
            </PageSuspenseLoadingFallback>
          </ProtectedRoute>
        ),
      },
      {
        path: "about-us",
        element: (
          <PageSuspenseLoadingFallback>
            <AboutUs />
          </PageSuspenseLoadingFallback>
        ),
      },
      {
        path: "login",
        element: (
          <PageSuspenseLoadingFallback>
            <Login />
          </PageSuspenseLoadingFallback>
        ),
      },
      {
        path: "register",
        element: (
          <PageSuspenseLoadingFallback>
            <Register />
          </PageSuspenseLoadingFallback>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <PageSuspenseLoadingFallback>
              <ProfileLayout />
            </PageSuspenseLoadingFallback>
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: (
              <PageSuspenseLoadingFallback>
                <Account />
              </PageSuspenseLoadingFallback>
            ),
          },
          {
            path: "orders",
            element: (
              <PageSuspenseLoadingFallback>
                <Orders />
              </PageSuspenseLoadingFallback>
            ),
          },
        ],
      },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
