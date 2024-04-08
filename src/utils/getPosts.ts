import { Posts } from "../types";

export const getPosts = async (): Promise<Posts> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};