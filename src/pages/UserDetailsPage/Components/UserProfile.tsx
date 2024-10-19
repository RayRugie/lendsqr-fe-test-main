import styles from "./UserProfile.module.scss";
import open_star_icon from "../../../assets/images/open_star_icon.png";
import avatar_icon from "../../../assets/images/avatar.png";
import filled_star_icon from "../../../assets/images/filled_star_icon.png";
import TabLinks from "./TabLinks";
import { SingleUserProps } from "../../../utils/Users.types";

const UserProfile = ({ userDetail }: any) => {
  // const UserProfile = ({ userDetail }: SingleUserProps) => {
  return (
    <>
      <div className={styles.UserProfile}>
        <div className={styles.UserProfile_container}>
          <div className={styles.userName_avatar}>
            <img
              src={userDetail?.profile?.avatar}
              alt="user_avatar"
              className={styles.avatar_icon}
            />
            <div className={styles.name_panel}>
              <h2>{`${userDetail?.profile?.lastName} ${userDetail?.profile?.firstName}`}</h2>
              <p>{userDetail?.accountNumber}</p>
            </div>
          </div>

          <div className={styles.user_tier}>
            <p>User’s Tier</p>
            <div className={styles.stars}>
              <img src={filled_star_icon} alt="star_icon" />
              <img src={open_star_icon} alt="star_icon" />
              <img src={open_star_icon} alt="star_icon" />
            </div>
          </div>
          <div className={styles.account_details}>
            <h2>{`${userDetail?.profile?.currency}${(
              userDetail?.accountBalance * 100
            ).toLocaleString()}.00`}</h2>
            <p>{`${userDetail?.accountNumber}/Providus Bank`}</p>
          </div>
        </div>

        <TabLinks />
      </div>
    </>
  );
};

export default UserProfile;
