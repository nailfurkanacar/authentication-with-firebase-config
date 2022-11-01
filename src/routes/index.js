import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "../containers/404";
import ForbiddenPage from "../containers/403";
import AuthPage from "../containers/AuthPage";
import AuthenticatedPage from "../containers/AuthenticatedPage";
import UnAuthenticatedPage from "../containers/UnAuthenticatedPage";
import AuthCondition from "./AuthCondition";
import UnauthCondition from "./UnauthCondition";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <UnauthCondition>
          <AuthPage />
        </UnauthCondition>
      ),
    },
    {
      path: "/authenticated",
      element: (
        <AuthCondition>
          <AuthenticatedPage />
        </AuthCondition>
      ),
    },
    {
      path: "/authenticated",
      element: (
        <AuthCondition>
          <AuthenticatedPage />
        </AuthCondition>
      ),
    },
    {
      path: "/unauthenticated",
      element: (
        <UnauthCondition>
          <UnAuthenticatedPage />
        </UnauthCondition>
      ),
    },
    {
      path: "/403",
      element: <ForbiddenPage />,
    },
    {
      path: "/404",
      element: <NotFoundPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
