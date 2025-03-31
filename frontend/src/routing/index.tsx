import { App } from "@/App";
import { Error } from "@/Error";
import { Create, Home, Credits, Billing, ViewAll } from "@/components/pages";
import { CreateGuard } from "@/components/pages/create/components/guard";
import { HomePageError } from "@/components/pages/home/Error";
import { ViewGuard } from "@/components/pages/viewAll/components/guard";
import { RouterProvider, createHashRouter } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    Component: App,
    errorElement: <Error />,
    children: [
      {
        index: true,
        errorElement: <HomePageError />,
        element: <Home />,
      },
      {
        path: "/credits",
        element: <Credits />,
      },
      {
        path: "/billing/:type",
        element: <Billing />,
      },
      {
        path: "/viewAll/:type",
        element: (
          <ViewGuard>
            <ViewAll />
          </ViewGuard>
        ),
      },
      {
        path: "create/:type",
        errorElement: <div>Ooops, unexpected error happened.</div>,
        element: (
          <CreateGuard>
            <Create />
          </CreateGuard>
        ),
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
