import { useContext, useEffect } from "react";
import SingleTableData from "./SingleTableData";
import styles from "./UserTableInfo.module.scss";
import { UserTableProps } from "../../../utils/Users.types";
import { AppContext } from "../../../context/AppContext";
import Loader from "../../../Components/Loader";

const UserTableInfo = ({ users, loading }: UserTableProps) => {
  const { currentPage, itemsPerPage } = useContext(AppContext);

  return (
    <>
      {loading ? (
        <div className={styles.LoaderBody}>
          <Loader />
        </div>
      ) : (
        <div className={styles.UserTableInfo}>
          {users
            .slice(
              currentPage * itemsPerPage - itemsPerPage,
              currentPage * itemsPerPage
            )
            .map((user, index) => {
              return (
                <SingleTableData
                  user={user}
                  key={`${user.userName}${user.createdAt}${index}`}
                  id={index}
                />
              );
            })}
        </div>
      )}
    </>
  );
};

export default UserTableInfo;
