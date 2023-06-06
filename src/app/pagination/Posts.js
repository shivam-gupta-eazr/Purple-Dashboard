import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementData } from "../redux/Action";
export const Posts = ({ post, loading }) => {
  console.log("==>", post);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {post?.map((val, index) => {
        return (
          <>
            <tr key={index}>
              <td>
                {" "}
                <img src={val.image} className="mr-2" alt="face" />{" "}
                {val.firstName}
              </td>
              <td>{val.company.title}</td>
              <td>{val.email}</td>
              <td>{val.gender}</td>
              <td>{val.phone}</td>
            </tr>
          </>
        );
      })}
    </>
  );
};
