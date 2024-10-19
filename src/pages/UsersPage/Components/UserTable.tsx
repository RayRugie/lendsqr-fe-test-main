import { useState, useEffect } from "react";
import styles from "./UserTable.module.scss";
import TableHeader from "./TableHeader";
import UserTableInfo from "./UserTableInfo";
import { UserTableProps, User } from "../../../utils/Users.types";

const UserTable = ({ users, loading }: UserTableProps) => {
  const [userList, setUserList] = useState<User[]>([]);

  useEffect(() => {
    setUserList(users);
  }, [users]);

  return (
    <>
      <div className={styles.UserTable}>
        <TableHeader />
        <UserTableInfo users={userList} loading={loading} />
      </div>
    </>
  );
};

export default UserTable;
