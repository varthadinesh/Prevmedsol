import React from 'react';

const Pagination = (props) => {

    const stateData=props.stateData;
    const pageSize=props.pageSize;
    const currentPage=props.currentPage;
    const totalPages=props.totalPages;
    const setCurrentPage=props.setCurrentPage;
    
      const handlePreviousClick = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      };
    
      const handleNextClick = () => {
        if (currentPage < totalPages) {
          setCurrentPage(currentPage + 1);
        }
      };
    
      const handlePageClick = (page) => {
        setCurrentPage(page);
      };
    
      const generatePageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
          pages.push(
            <li key={i} className={`page-item ${i === currentPage ? 'active' : ''}`}>
              <button className="page-link" onClick={() => handlePageClick(i)}>
                {i}
              </button>
            </li>
          );
        }
        return pages;
      };
    
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = startIndex + pageSize;
    
    return (
        <>
         <div
                className="d-flex justify-content-between "
                style={{ background: "#EFF3F8", width: "100%" }}
              >
                <div className="p-3">
                  <div
                    className="dataTables_info"
                    id="dynamic-table_info"
                    role="status"
                    aria-live="polite"
                  >
                    Showing {startIndex + 1} to{" "}
                    {Math.min(endIndex, stateData.length)} of {stateData.length}{" "}
                    entries
                  </div>
                </div>
                <nav>
                  <ul className="pagination">
                    <li
                      className={`page-item ${
                        currentPage === 1 ? "disabled" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={handlePreviousClick}
                      >
                        Previous
                      </button>
                    </li>
                    {generatePageNumbers()}
                    <li
                      className={`page-item ${
                        currentPage === totalPages ? "disabled" : ""
                      }`}
                    >
                      <button className="page-link" onClick={handleNextClick}>
                        Next
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            
        </>
    );
};

export default Pagination;