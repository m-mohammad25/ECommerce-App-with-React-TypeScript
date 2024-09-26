import { RouterProvider, createBrowserRouter } from "react-router-dom";

// layouts
import { MainLayout } from "@layouts/index";

// pages
import Home from "@pages/Home";
import Products from "@pages/Products";
import Categories from "@pages/Categories";
import AboutUs from "@pages/AboutUs";

//style
import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products/:prefix",
        element: <Products />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
