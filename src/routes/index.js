import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "../containers/AuthPage";
import AuthenticatedPage from "../containers/AuthenticatedPage";
import UnAuthenticatedPage from "../containers/UnAuthenticatedPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/authenticated" element={<AuthenticatedPage />} />
        <Route path="/unauthenticated" element={<UnAuthenticatedPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
