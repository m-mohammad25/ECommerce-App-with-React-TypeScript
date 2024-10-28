import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

// layouts
const MainLayout = lazy(() => import("@layouts/MainLayout/MainLayout"));

// pages
const Home = lazy(() => import("@pages/Home"));
const Products = lazy(() => import("@pages/Products"));
const Categories = lazy(() => import("@pages/Categories"));
const AboutUs = lazy(() => import("@pages/AboutUs"));
const Login = lazy(() => import("@pages/Login"));
const Register = lazy(() => import("@pages/Register"));
const Cart = lazy(() => import("@pages/Cart"));
const Wishlist = lazy(() => import("@pages/Wishlist"));
import Error from "@pages/Error/Error";
import {
  LottieHandler,
  PageSuspenseLoadingFallback,
} from "@components/feedback";

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
          <Suspense fallback="loading, please wait...">
            <Home />
          </Suspense>
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
          <PageSuspenseLoadingFallback>
            <Wishlist />
          </PageSuspenseLoadingFallback>
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
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
