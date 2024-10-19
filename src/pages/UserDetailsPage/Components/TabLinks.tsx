import styles from "./TabLinks.module.scss";

const TabLinks = () => {
  return (
    <>
      <div className={styles.TabLinks}>
        <p className={styles.active_link}>General Details</p>
        <p className={styles.inactive_link}>Documents</p>
        <p className={styles.inactive_link}>Bank Details</p>
        <p className={styles.inactive_link}>Loans</p>
        <p className={styles.inactive_link}>Savings</p>
        <p className={styles.inactive_link}>App and System</p>
      </div>
    </>
  );
};

export default TabLinks;
