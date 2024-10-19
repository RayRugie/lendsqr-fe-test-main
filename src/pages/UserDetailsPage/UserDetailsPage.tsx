import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./UserDetailsPage.module.scss";
import back_arrow from "../../assets/images/back_arrow.png";
import UserProfile from "./Components/UserProfile";
import GeneralDetails from "./Components/GeneralDetails";
import Loader from "../../Components/Loader";

const UserDetailsPage = () => {
  const { pathname } = useLocation();
  const [singleUser, setSingleUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const pathNameList = pathname.split("/");
  const userId = pathNameList[pathNameList.length - 1];

  async function fetchUser() {
    const response = await fetch(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userId}`
    );
    const user = await response.json();
    return user;
  }

  useEffect(() => {
    window.scrollTo({
      top: -200,
      left: 0,
      behavior: "smooth",
    });
    const handleFetchUser = async () => {
      try {
        setLoading(true);
        const fetchedUser = await fetchUser();
        setLoading(false);
        setSingleUser(fetchedUser);
        setSuccess(true);
      } catch (error) {
        setLoading(false);
        setError("An error occured");
        setSuccess(false);
      }
    };

    handleFetchUser();
  }, []);

  return (
    <>
      <div className={styles.UserDetailsPage}>
        <div className={styles.backLink}>
          <Link to={"/dashboard/users"}>
            <img src={back_arrow} alt="back arrow icon" />
          </Link>
          <p>Back to Users</p>
        </div>
        <main className={styles.pageHeader}>
          <h1>User Details</h1>
          <div className={styles.userButtons}>
            <button className={styles.blacklist_btn}>Blacklist User</button>
            <button className={styles.activate_btn}>Activate User</button>
          </div>
        </main>
        {Object.keys(singleUser).length !== 0 ? (
          <>
            <UserProfile userDetail={singleUser} />
            <GeneralDetails userDetail={singleUser} />
          </>
        ) : (
          <>
            <div className={styles.LoaderBody}>
              <Loader />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default UserDetailsPage;
