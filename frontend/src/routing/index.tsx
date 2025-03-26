import { App } from "@/App";
import { Create, Home } from "@/components/pages";
import CreateGuard from "@/components/pages/create/components/guard";
import { RouterProvider, createHashRouter } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        element: <Home />,
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
