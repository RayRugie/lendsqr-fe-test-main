import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import Topbar from "../Components/TopBar";
import Sidebar from "../Components/Sidebar";
import styles from "./DashboardLayout.module.scss";

const DashboardLayout = () => {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("isLogin");

  const appContext = useContext(AppContext);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return isLoggedIn ? (
    <>
      <main className={styles.Layout}>
        <div className={styles.topbar}>
          <Topbar />
        </div>
        <section className={styles.main_container}>
          <div
            className={
              appContext.mobileSidebarOpen
                ? styles.sidebarMobileOpen
                : styles.sidebar
            }
          >
            <Sidebar />
          </div>
          <div className={styles.outlet}>
            <Outlet />
          </div>
        </section>
      </main>
    </>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default DashboardLayout;
