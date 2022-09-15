import React from "react";
import styles from "../styles/pagination.module.scss";

const Pagination = ({ tilesPerPage, totalTiles, paginate }) => {
  const totalPageNumbers = Math.ceil(totalTiles / tilesPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPageNumbers; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.pagination}>
      <ul className="page-tiles">
        {pageNumbers.slice(0, 5).map((pageNumber) => (
          <li className="page-tile" key={pageNumber}>
            <div className="page-link" onClick={() => paginate(pageNumber)}>
              {pageNumber}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
