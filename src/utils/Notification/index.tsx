import { useEffect } from "react";
import styles from "./Notification.module.scss";
import checkmark from "./images/checkmark_icon.jpg";
import close_icon from "./images/close_icon.png";

type NotificatonProps = {
  setNotification: React.Dispatch<React.SetStateAction<boolean>>;
  notificationHeader?: string;
  notificationBody: string;
  notificationDuration?: number;
  selfClosing?: boolean;
};

const Notification = ({
  setNotification,
  notificationHeader = "Success!",
  notificationBody,
  notificationDuration = 3000,
  selfClosing = true,
}: NotificatonProps) => {
  useEffect(() => {
    const notificationTimer = setTimeout(() => {
      if (selfClosing) setNotification(false);
    }, notificationDuration);

    return () => {
      clearTimeout(notificationTimer);
    };
  }, []);

  return (
    <>
      <div className={styles.Notification}>
        <div className={styles.Notification_header}>
          <h5>{notificationHeader}</h5>
          <img
            src={close_icon}
            alt="close_notification"
            onClick={() => setNotification(false)}
          />
        </div>
        <p>{notificationBody}</p>
      </div>
    </>
  );
};

export default Notification;
