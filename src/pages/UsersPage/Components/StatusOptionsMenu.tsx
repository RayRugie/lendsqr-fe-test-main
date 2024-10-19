import styles from "./StatusOptionsMenu.module.scss";
import blacklist_icon from "../../../assets/images/blacklist_icon.png";
import view_details_icon from "../../../assets/images/view_details_icon.png";
import activate_icon from "../../../assets/images/activate_icon.png";
import { Link } from "react-router-dom";

type StatusOptionsMenuProps = {
  id: string;
};

const StatusOptionsMenu = (props: StatusOptionsMenuProps) => {
  return (
    <>
      <div className={styles.StatusOptionsMenu}>
        <Link
          className={styles.icon_container}
          to={`/dashboard/users/${props.id}`}
        >
          <img src={view_details_icon} alt="view_details_icon" />
          <p>View Details</p>
        </Link>
        <div className={styles.icon_container}>
          <img src={blacklist_icon} alt="blacklist_icon" />
          <p>Blacklist User</p>
        </div>
        <div className={styles.icon_container}>
          <img src={activate_icon} alt="activate_icon" />
          <p>Activate User</p>
        </div>
      </div>
    </>
  );
};

export default StatusOptionsMenu;
