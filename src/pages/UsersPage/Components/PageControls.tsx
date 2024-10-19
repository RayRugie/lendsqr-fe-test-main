import React, { useContext, useState } from "react";
import styles from "./PageControls.module.scss";
import right_icon from "../../../assets/images/right_icon.png";
import left_icon from "../../../assets/images/left_icon.png";
import { AppContext } from "../../../context/AppContext";

const PageControls = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const {
    itemsPerPage,
    setitemsPerPage,
    currentPage,
    setcurrentPage,
    paginationLimit,
    setPaginationLimit,
  } = useContext(AppContext);

  const pageNumbers: number[] = [];
  for (let i = 1; i < 100 / itemsPerPage + 1; i++) {
    pageNumbers.push(i);
  }

  const handleSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setcurrentPage(1);
    setPaginationLimit(100 / +e.target.value);
    setitemsPerPage(+e.target.value);
    setErrorMessage("");
  };

  const handlePaginate = (requestedPage: number) => {
    setcurrentPage(requestedPage);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1);
      setErrorMessage("");
    } else {
      setErrorMessage("This is the first page.");
    }
  };

  const handleNextPage = () => {
    if (currentPage < paginationLimit) {
      setcurrentPage(currentPage + 1);
      setErrorMessage("");
    } else {
      setErrorMessage("Maximum Page number.");
    }
  };

  return (
    <>
      <div className={styles.PageControls}>
        <div className={styles.left_side}>
          <p>Showing</p>
          <div>
            <div className="custom-select">
              <select onChange={handleSelection}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
          </div>
          <p>out of 100</p>
        </div>
        <div className={styles.right_side}>
          <div className={styles.pageNumberControls}>
            <button onClick={handlePreviousPage}>
              <img src={left_icon} alt="previous_icon" />
            </button>
            <div className={styles.pageLists}>
              {pageNumbers.map((num) => (
                <p
                  key={num}
                  className={currentPage === num ? styles.pageNumberActive : ""}
                  onClick={() => handlePaginate(num)}
                >
                  {num}
                </p>
              ))}
            </div>
            <button onClick={handleNextPage}>
              <img src={right_icon} alt="next_icon" />
            </button>
          </div>
          <p className={styles.error_indicator}>{errorMessage}</p>
        </div>
      </div>
    </>
  );
};

export default PageControls;
