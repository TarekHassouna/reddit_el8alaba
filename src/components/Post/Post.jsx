import "./Posts.css";   
function timeAgo(dateString) {
  const seconds = Math.floor((Date.now() - new Date(dateString)) / 1000);

  if (seconds < 60) return "just now";

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} min. ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hr. ago`;

  const days = Math.floor(hours / 24);
  return `${days} d. ago`;
}
function Post({ post }) {
  return (
    <div className="post">
        <div className="post-header">
  <span className="community">r/{post.community}</span>
  <span className="time"> . {timeAgo(post.createdAt)}</span>
        </div>
      <h2 className="title">{post.title}</h2>
      <p className="body">{post.body}</p>
      <p className="score">{post.score}</p>
  
    </div>
  );
}
export default Post;