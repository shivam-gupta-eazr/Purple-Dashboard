import React, { useState, useEffect } from "react";
import { Posts } from "./Posts";
import { ConfigurePagination } from "./ConfigurePagination";
import { useDispatch, useSelector } from "react-redux";

export const Pagination = () => {
  // const [post, setPost] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  // react-redux
  const currentData = useSelector((state) => state.data?.data?.users);
  const loading = useSelector((state) => state.data.loading);

  if (loading === true) { 
    return <h3>Loading...</h3>;
  }

  //Get Current Post
  const indexOfLastPage = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPage - postsPerPage;
  const currentPost = currentData?.slice(indexOfFirstPost, indexOfLastPage);

  console.log(currentPost);
  // change page

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Posts post={currentPost} loading={loading} />
      <ConfigurePagination
        postPerPage={postsPerPage}
        totalPost={currentData?.length}
        paginate={paginate}
      />
    </>
  );
};
