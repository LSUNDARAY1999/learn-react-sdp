import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/postsApi";

const Posts = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 10000,
  });

  if (isLoading) {
    return <p className="text-center">Loading...</p>;
  }

  if (isError) {
    return <p className="text-center text-red-500">Error</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">React Query Demo</h1>

      {data.slice(0, 10).map((post) => (
        <div key={post.id} className="border p-3 mb-2 bg-white">
          <h2 className="font-semibold">{post.title}</h2>
          <p className="text-sm">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
