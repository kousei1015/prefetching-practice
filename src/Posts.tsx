import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./utils/getPosts";

const Posts = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isLoading) return "Loading...";

  return (
    <div>
      {posts?.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};

export default Posts;
