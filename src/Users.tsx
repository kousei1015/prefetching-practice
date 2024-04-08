import { useEffect } from "react";
import { useQuery, QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./main";
import { getUsers } from "./utils/getUsers";
import { getPosts } from "./utils/getPosts";
import { Link } from "react-router-dom";

const Users = () => {
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (isLoading) return "Loading...";

  return (
    <QueryClientProvider client={queryClient}>
      {/* QueryClientProvider を使用して QueryClient を提供 */}
      <div>
        {users?.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}

        <Link to="/posts" onMouseEnter={() => {
           queryClient.prefetchQuery({ queryKey: ["posts"], queryFn: getPosts });
        }}>Postsコンポーネントへ</Link>
      </div>
    </QueryClientProvider>
  );
};

export default Users;
