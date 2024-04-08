import { Users } from "../types";

export const getUsers = async (): Promise<Users> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};