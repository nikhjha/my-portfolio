import { RouteObject } from "react-router";
import BaseLayout from "./app/base.layout";
import HomePage from "./app/portfolio/home.page";

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
