import { useState } from "react";
import { getPosts } from "../../api/postsApi";
import Post from "../../components/Post/Post";
import "./Feed.css";

function Feed() {
  const [posts] = useState(() => getPosts());

  if (posts.length === 0) {
    return <h2>No posts yet</h2>;
  }

  return (
    <div className="feed">
      {posts.map((post) => (
      <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
export default Feed;