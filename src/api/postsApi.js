const KEY = "posts";

// Returns all saved posts (newest first). Returns [] if there are none.
export function getPosts() {
  const saved = localStorage.getItem(KEY);
  return saved ? JSON.parse(saved) : [];
}

// Builds a full post object, saves it, and returns it.
export function createPost({ community, title, body }) {
  const posts = getPosts();

  const post = {
    id: Date.now(),                       // unique number
    community,
    title,
    body,
    author: "guest",                      // req 1 will replace this
    score: 0,                             // req 8 (voting) starts here
    createdAt: new Date().toISOString(),
  };

  localStorage.setItem(KEY, JSON.stringify([post, ...posts]));
  return post;
}