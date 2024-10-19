import { Link } from "react-router-dom";
import styles from "./ComingSoonPage.module.scss";
import coming_soon from "../../assets/images/coming_soon.png";

const ComingSoonPage = () => {
  return (
    <>
      <div className={styles.ComingSoonPage}>
        <h2>WE ARE WORKING ON THIS FEATURE!!!</h2>
        <h3>
          Kindly visit the{" "}
          <>
            <Link to="/dashboard/users">Users</Link>
          </>{" "}
          page for content.
        </h3>
        <h3>Or Click on the Users route on the Sidebar.</h3>
        <img src={coming_soon} alt="coming_soon_image" />
      </div>
    </>
  );
};

export default ComingSoonPage;
