import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "../containers/404";
import ForbiddenPage from "../containers/403";
import AuthPage from "../containers/AuthPage";
import AuthenticatedPage from "../containers/AuthenticatedPage";
import UnAuthenticatedPage from "../containers/UnAuthenticatedPage";
import AuthCondition from "./AuthCondition";
import UnauthCondition from "./UnauthCondition";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <UnauthCondition>
              <AuthPage />
            </UnauthCondition>
          }
        />
        <Route
          path="/authenticated"
          element={
            <AuthCondition>
              <AuthenticatedPage />
            </AuthCondition>
          }
        />
        <Route
          path="/unauthenticated"
          element={
            <UnauthCondition>
              <UnAuthenticatedPage />
            </UnauthCondition>
          }
        />
        <Route path="/403" element={<ForbiddenPage />} />
        <Route path="/404" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
