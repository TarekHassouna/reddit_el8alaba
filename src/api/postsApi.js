let posts = [];

export function getPosts() {
  return posts;
}

export function createPost({ community, title, body }) {
  const post = {
    id: Date.now(),
    community,
    title,
    body,
    author: "guest",
    score: 0,
    createdAt: new Date().toISOString(),
  };

  posts = [post, ...posts];
  return post;
}