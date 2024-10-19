import { useContext } from "react";
import styles from "./Sidebar.module.scss";
import { AppContext } from "../context/AppContext";
import SidebarLink from "./SidebarLink";
import { useNavigate } from "react-router-dom";
import Switch_Organization from "../assets/images/sidebar_icons/Switch Organization.png";
import dropdown_open_icon from "../assets/images/sidebar_icons/dropdown_open_icon.png";
import dashboard_icon from "../assets/images/sidebar_icons/Dashboard.png";
import users_icon from "../assets/images/sidebar_icons/Users.png";
import guarantors_icon from "../assets/images/sidebar_icons/Guarantors.png";
import loans_icon from "../assets/images/sidebar_icons/Loans.png";
import decision_models_icon from "../assets/images/sidebar_icons/Decision Models.png";
import savings_icon from "../assets/images/sidebar_icons/Savings.png";
import loan_requets_icon from "../assets/images/sidebar_icons/Loan Requests.png";
import whitelist_icon from "../assets/images/sidebar_icons/Whitelist.png";
import karma_icon from "../assets/images/sidebar_icons/Karma.png";
import loan_products from "../assets/images/sidebar_icons/Loan Products.png";
import savings_products from "../assets/images/sidebar_icons/Savings Products.png";
import fees_and_charges from "../assets/images/sidebar_icons/Fees and Charges.png";
import transactions from "../assets/images/sidebar_icons/Transactions.png";
import services from "../assets/images/sidebar_icons/Services.png";
import service_account from "../assets/images/sidebar_icons/Service Account.png";
import settlemets from "../assets/images/sidebar_icons/Settlements.png";
import reports from "../assets/images/sidebar_icons/Reports.png";
import preferences from "../assets/images/sidebar_icons/Preferences.png";
import fees_and_pricing from "../assets/images/sidebar_icons/Fees and Pricing.png";
import audit_logs from "../assets/images/sidebar_icons/Audit Logs.png";
import system_messages from "../assets/images/sidebar_icons/systems_messages.png";
import log_out from "../assets/images/sidebar_icons/sign-out 1.png";

const Sidebar = () => {
  const navigate = useNavigate();

  const navLinkSwitchOrganization = {
    image: Switch_Organization,
    location: "Switch Organization",
    dropDownIcon: dropdown_open_icon,
  };

  const navLinkDashboard = {
    image: dashboard_icon,
    location: "Dashboard",
  };

  const firstNavLinks = [
    {
      image: users_icon,
      location: "Users",
    },
    {
      image: guarantors_icon,
      location: "Guarantors",
    },
    {
      image: loans_icon,
      location: "Loans",
    },
    {
      image: decision_models_icon,
      location: "Decision Models",
    },
    {
      image: savings_icon,
      location: "Savings",
    },
    {
      image: loan_requets_icon,
      location: "Loan Requests",
    },
    {
      image: whitelist_icon,
      location: "Whitelist",
    },
    {
      image: karma_icon,
      location: "Karma",
    },
  ];

  const secondNavLinks = [
    {
      image: Switch_Organization,
      location: "Organization",
    },
    {
      image: loan_products,
      location: "Loan Products",
    },
    {
      image: savings_products,
      location: "Savings Products",
    },
    {
      image: fees_and_charges,
      location: "Fees and Charges",
    },
    {
      image: transactions,
      location: "Transactions",
    },
    {
      image: services,
      location: "Services",
    },
    {
      image: service_account,
      location: "Service Account",
    },
    {
      image: settlemets,
      location: "Settlements",
    },
    {
      image: reports,
      location: "Reports",
    },
  ];

  const thirdNavLinks = [
    {
      image: preferences,
      location: "Preferences",
    },
    {
      image: fees_and_pricing,
      location: "Fees and Pricing",
    },
    {
      image: audit_logs,
      location: "Audio Logs",
    },
    {
      image: system_messages,
      location: "Systems Messages",
    },
  ];

  const navLinkLogout = {
    image: log_out,
    location: "Logout",
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <div className={styles.Sidebar}>
        <SidebarLink navLink={navLinkSwitchOrganization} />
        <SidebarLink navLink={navLinkDashboard} />
        <h2>Customers</h2>
        {firstNavLinks.map((item) => {
          return <SidebarLink key={item.location} navLink={item} />;
        })}
        <h2>Businesses</h2>
        {secondNavLinks.map((item) => {
          return <SidebarLink key={item.location} navLink={item} />;
        })}
        <h2>Settings</h2>
        {thirdNavLinks.map((item) => {
          return <SidebarLink key={item.location} navLink={item} />;
        })}
        <div className={styles.logout} onClick={logout}>
          <SidebarLink navLink={navLinkLogout} />
          <p className={styles.version}>v1.2.0</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
