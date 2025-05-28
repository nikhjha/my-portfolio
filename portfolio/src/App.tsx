import { createBrowserRouter, RouterProvider } from "react-router";
import appRoutes from "./app.routes";
import { ThemeProvider } from "./contexts/theme-provider";

const router = createBrowserRouter(appRoutes);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
