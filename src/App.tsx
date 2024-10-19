import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//Pages
import LoginPage from "./pages/LoginPage/LoginPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import UserDetailsPage from "./pages/UserDetailsPage/UserDetailsPage";
import ComingSoonPage from "./pages/ComingSoonPage/ComingSoonPage";

//Layout
import DashboardLayout from "./utils/DashboardLayout";

//context
import { AppContextProvider } from "./context/AppContext";

const App = () => {
  const location = useLocation();
  return (
    <>
      <AppContextProvider>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* public routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />

            {/* private routes */}
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<ComingSoonPage />} />
              <Route path="/dashboard/:id" element={<ComingSoonPage />} />
              <Route path="/dashboard/users" element={<UsersPage />} />
              <Route
                path="/dashboard/users/:id"
                element={<UserDetailsPage />}
              />
            </Route>
          </Routes>
        </AnimatePresence>
      </AppContextProvider>
    </>
  );
};

export default App;
