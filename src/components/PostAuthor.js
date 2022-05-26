import { useSelector } from "react-redux";

import React from "react";

const PostAuthor = ({ userId }) => {
  const users = useSelector((state) => state.usersAbc);

  const author = users.find((user) => user.id === userId);

  return <span>by {author ? author.name : "Unknown author"}</span>;
};
export default PostAuthor;
