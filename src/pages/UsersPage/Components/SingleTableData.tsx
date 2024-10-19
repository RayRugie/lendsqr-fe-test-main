import { useEffect, useState, useRef } from "react";
import styles from "./SingleTableData.module.scss";
import options_icon from "../../../assets/images/options_icon.png";
import StatusOptionsMenu from "./StatusOptionsMenu";

type SingleTableDataProps = {
  user: {
    createdAt: string;
    orgName: string;
    userName: string;
    email: string;
    phoneNumber: string;
    lastActiveDate: string;
    id: string;
  };
  id: number;
};

const SingleTableData = (props: SingleTableDataProps) => {
  const [optionsMenuOpen, setOptionsMenuOpen] = useState(false);
  let optionsMenuRef = useRef<HTMLDivElement>(null);

  const getMonthName = (monthNumber: number) => {
    const date = new Date();
    date.setMonth(monthNumber - 1);
    return date.toLocaleString("en-US", { month: "long" });
  };

  const dateTimeFormatter = (dateTimeString: string) => {
    const monthNumber = +dateTimeString.substring(5, 7);
    const month = getMonthName(monthNumber);
    const day = dateTimeString.substring(8, 10);
    const year = dateTimeString.substring(0, 4);
    const timeString = dateTimeString.substring(11, 16);
    const meridean = +dateTimeString.substring(11, 13);
    const merideanTime = meridean > 12 ? "AM" : "PM";
    return `${month} ${day}, ${year} ${timeString} ${merideanTime}`;
  };

  const getCustomerStatus = (dateTimeString: string) => {
    const year = +dateTimeString.substring(0, 4);
    if (year >= 2040) return "Pending";
    else if (year <= 1999) return "Blacklisted";
    else if (year >= 2000 && year <= 2010) return "Inactive";
    else return "Active";
  };

  const handleOptionsMenu = () => {
    setOptionsMenuOpen(!optionsMenuOpen);
  };

  useEffect(() => {
    let handler = (e: Event) => {
      if (!optionsMenuRef?.current?.contains(e.target as HTMLDivElement))
        setOptionsMenuOpen(false);
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <hr className={props.id !== 0 ? styles.showLine : styles.hideLine} />
      <div className={styles.SingleTableData}>
        <div className={styles.userdetails}>
          <p className={styles.orgName}>{props.user.orgName}</p>
          <p className={styles.userName}>{props.user.userName}</p>
          <p className={styles.email}>{props.user.email}</p>
          <p className={styles.phoneNumber}>{props.user.phoneNumber}</p>
          <p className={styles.createdAt}>
            {dateTimeFormatter(props.user.lastActiveDate)}
          </p>
          <div
            className={
              getCustomerStatus(props.user.lastActiveDate) === "Pending"
                ? styles.showPending
                : styles.hideLine
            }
          >
            {getCustomerStatus(props.user.lastActiveDate)}
          </div>
          <div
            className={
              getCustomerStatus(props.user.lastActiveDate) === "Blacklisted"
                ? styles.showBlacklisted
                : styles.hideLine
            }
          >
            {getCustomerStatus(props.user.lastActiveDate)}
          </div>
          <div
            className={
              getCustomerStatus(props.user.lastActiveDate) === "Active"
                ? styles.showActive
                : styles.hideLine
            }
          >
            {getCustomerStatus(props.user.lastActiveDate)}
          </div>
          <div
            className={
              getCustomerStatus(props.user.lastActiveDate) === "Inactive"
                ? styles.showInactive
                : styles.hideLine
            }
          >
            {getCustomerStatus(props.user.lastActiveDate)}
          </div>
        </div>
        <div className={styles.options_icon} onClick={handleOptionsMenu}>
          <img src={options_icon} alt="options_icon" />
        </div>
        <div
          className={optionsMenuOpen ? styles.MenuOpen : styles.MenuClosed}
          ref={optionsMenuRef}
        >
          <StatusOptionsMenu id={props.user.id} />
        </div>
      </div>
    </>
  );
};

export default SingleTableData;
