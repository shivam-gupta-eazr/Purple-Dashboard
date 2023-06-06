import React from "react";

export const ConfigurePagination = ({ postPerPage, totalPost, paginate }) => {
  let active;
  let items = [];
  for (let number = 1; number <= Math.ceil(totalPost / postPerPage); number++) {
    items.push(number);
  }
  return (
    <>
      <>
        <nav className="me-auto">
          <ul className="pagination">
            {items.map((number, ind) => {
              return (
                <li className="page-item" key={ind}>
                  <a
                    onClick={() => {
                      paginate(number);
                    }}
                    className="page-link"
                  >
                    {number}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </>
    </>
  );
};
