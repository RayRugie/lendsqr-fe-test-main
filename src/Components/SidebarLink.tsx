import styles from "./SidebarLink.module.scss";
import { NavLink } from "react-router-dom";

type SidebarLinkProps = {
  navLink: {
    image: string;
    location: string;
    dropDownIcon?: string;
  };
};

const SidebarLink = (props: SidebarLinkProps) => {
  const routeFormat = (str: string) => {
    if (str === "Dashboard") return `/dashboard`;
    let route = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") route = route + "-";
      route = route + str[i].toLocaleLowerCase();
    }
    return `/dashboard/${route}`;
  };

  return (
    <>
      <NavLink
        // className={styles.SidebarLink}
        className={({ isActive, isPending }) =>
          isPending
            ? styles.SidebarLink
            : isActive
            ? styles.SidebarLinkActive
            : styles.SidebarLink
        }
        to={routeFormat(props.navLink.location)}
      >
        <img src={props.navLink.image} alt={`${props.navLink.location}_icon`} />
        <p>{props.navLink.location}</p>
        <img
          src={props.navLink.dropDownIcon}
          alt=""
          className={styles.dropDownIcon}
        />
      </NavLink>
    </>
  );
};

export default SidebarLink;
