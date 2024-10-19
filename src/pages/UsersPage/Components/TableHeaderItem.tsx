import { useState, useRef } from "react";
import styles from "./TableHeaderItem.module.scss";
import staggered_dropdown_icon from "../../../assets/images/staggered_dropdown_icon.png";

type TableHeaderItemProps = {
  header: string;
};

const TableHeaderItem = (props: TableHeaderItemProps) => {
  return (
    <>
      <div className={styles.TableHeaderItem}>
        <h3>{props.header}</h3>
        <img src={staggered_dropdown_icon} alt="staggered_dropdown_icon" />
      </div>
    </>
  );
};

export default TableHeaderItem;
