import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  //   console.log(info.pages);

  let [width, setWidth] = useState(window.innerWidth);
  // console.log(width);
  let updateDimnesion = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimnesion);
    return () => {
      window.removeEventListener("resize", updateDimnesion);
    };
  }, []);

  return (
    <>
      <style jsx>
        {`
          @media (max-width: 768px) {
            .next,
            .prev {
              display: none;
            }
            .pagination {
              font-size: 14px;
            }
          } ;
        `}
      </style>
      <ReactPaginate
        className="pagination nextLabel justify-content-center gap-3 my-4"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        nextLabel="Next"
        previousLabel="Prev"
        nextClassName="btn btn-primary next"
        previousClassName="btn btn-primary prev"
        pageClassName=" page-item"
        pageLinkClassName="  page-link"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        nextLinkClassName="text-decoration-none text-white"
        previousLinkClassName="text-decoration-none text-white"
        activeClassName="active"
        onPageChange={(data) => {
          // console.log(data);
          // console.log(data.selected);
          setPageNumber(data.selected + 1);
        }}
        pageCount={info?.pages}
      />
    </>
  );
};

export default Pagination;

// const Pagination = ({ info, pageNumber, setPageNumber }) => {
//   //   console.log(info);
//   //   console.log(info.pages);
//   let next = () => {
//     setPageNumber((x) => x + 1);
//   };
//   let prev = () => {
//     if (pageNumber === 1) return;
//     setPageNumber((x) => x - 1);
//   };
//   return (
//     <div className="cotainer d-flex justify-content-center gap-5 my-5">
//       <button onClick={prev} className="btn btn-primary">
//         Prev
//       </button>
//       <button onClick={next} className="btn btn-primary">
//         Next
//       </button>
//       <ReactPaginate pageCount={info.pages} />
//     </div>
//   );
// };

// export default Pagination;
