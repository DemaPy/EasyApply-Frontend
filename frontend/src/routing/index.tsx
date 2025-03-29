import { App } from "@/App";
import { Create, Home } from "@/components/pages";
import CreateGuard from "@/components/pages/create/components/guard";
import { Credits } from "@/components/pages/credits";
import { HomePageError } from "@/components/pages/home/Error";
import { ViewAll } from "@/components/pages/viewAll";
import { ViewGuard } from "@/components/pages/viewAll/components/guard";
import { RouterProvider, createHashRouter } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    Component: App,
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
