import styles from "./FilterMenu.module.scss";
import calendar from "../../../assets/images/calendar.png";
import arrow_icon from "../../../assets/images/arrow_icon.png";

const FilterMenu = () => {
  return (
    <>
      <div className={styles.FilterMenu}>
        <div className={styles.input_container}>
          <label htmlFor="organization">Organization</label>
          <div className={styles.date_input}>
            <input type="text" className="" placeholder="Organization" />
            <div className={styles.calendar_icon}>
              <img src={arrow_icon} alt="arrow_icon" />
            </div>
          </div>
        </div>
        <div className={styles.input_container}>
          <label htmlFor="organization">Username</label>
          <input
            type="text"
            className={styles.input_field}
            placeholder="Username"
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="organization">Email</label>
          <input
            type="text"
            className={styles.input_field}
            placeholder="Email"
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="organization">Date</label>
          <div className={styles.date_input}>
            <input type="text" className="" placeholder="Date" />
            <div className={styles.calendar_icon}>
              <img src={calendar} alt="calendar_icon" />
            </div>
          </div>
        </div>
        <div className={styles.input_container}>
          <label htmlFor="organization">Phone Number</label>
          <input
            type="text"
            className={styles.input_field}
            placeholder="Phone Number"
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="organization">Status</label>
          <div className={styles.date_input}>
            <input type="text" className="" placeholder="Status" />
            <div className={styles.calendar_icon}>
              <img src={arrow_icon} alt="arrow_icon" />
            </div>
          </div>
        </div>
        <div className={styles.Btns}>
          <button className={styles.resetBtn}>Reset</button>
          <button className={styles.filterBtn}>Filter</button>
        </div>
      </div>
    </>
  );
};

export default FilterMenu;
