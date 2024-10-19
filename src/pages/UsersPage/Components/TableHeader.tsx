import { useState, useRef, useEffect } from "react";
import styles from "./TableHeader.module.scss";
import TableHeaderItem from "./TableHeaderItem";
import FilterMenu from "./FilterMenu";

const TableHeader = () => {
  const TableHeaders = [
    "Organization",
    "Username",
    "Email",
    "Phone number",
    "Date joined",
    "Status",
  ];
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  let filterMenuRef = useRef<HTMLDivElement>(null);

  const handleOptionsMenu = () => {
    setFilterMenuOpen(!filterMenuOpen);
  };

  useEffect(() => {
    let handler = (e: Event) => {
      if (!filterMenuRef?.current?.contains(e.target as HTMLDivElement))
        setFilterMenuOpen(false);
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <div className={styles.TableHeader} onClick={handleOptionsMenu}>
        {/* {TableHeaders.map((header) => {
          return <TableHeaderItem header={header} />;
        })} */}
        <div className={styles.organizationHeader}>
          <TableHeaderItem header={TableHeaders[0]} />
        </div>
        <div className={styles.userNameHeader}>
          <TableHeaderItem header={TableHeaders[1]} />
        </div>
        <div className={styles.emailHeader}>
          <TableHeaderItem header={TableHeaders[2]} />
        </div>
        <div className={styles.phoneNumberHeader}>
          <TableHeaderItem header={TableHeaders[3]} />
        </div>
        <div className={styles.dateJoinedHeader}>
          <TableHeaderItem header={TableHeaders[4]} />
        </div>
        <div className={styles.statusHeader}>
          <TableHeaderItem header={TableHeaders[5]} />
        </div>
      </div>
      <div
        className={filterMenuOpen ? styles.FilterOpen : styles.FilterClosed}
        ref={filterMenuRef}
      >
        <FilterMenu />
      </div>
    </>
  );
};

export default TableHeader;
