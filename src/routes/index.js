import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "../containers/404";
import ForbiddenPage from "../containers/403";
import AuthPage from "../containers/AuthPage";
import AuthenticatedPage from "../containers/AuthenticatedPage";
import UnAuthenticatedPage from "../containers/UnAuthenticatedPage";
import AuthGuard from "./AuthGuard";
import UnauthGuard from "./UnauthGuard";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <UnauthGuard>
              <AuthPage />
            </UnauthGuard>
          }
        />
        <Route
          path="/authenticated"
          element={
            <AuthGuard>
              <AuthenticatedPage />
            </AuthGuard>
          }
        />
        <Route
          path="/unauthenticated"
          element={
            <UnauthGuard>
              <UnAuthenticatedPage />
            </UnauthGuard>
          }
        />
        <Route path="/403" element={<ForbiddenPage />} />
        <Route path="/404" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
