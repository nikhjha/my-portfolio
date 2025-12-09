import { RouteObject } from "react-router";
import BaseLayout from "./pages/BaseLayout";
import HomePage from "./pages/HomePage";

const appRoutes: RouteObject[] = [
  {
    path: "/",
    Component: BaseLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
];

export default appRoutes;
