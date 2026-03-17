// src/posts.js

let posts = [
  { id: 1, text: "Hello from React Router!", author: "Gemini" },
  { id: 2, text: "Data loading is pretty cool.", author: "Gemini" },
];

// Simulate network delay
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export async function getPosts() {
  await delay(500);
  return posts;
}

export async function getPost(id) {
  await delay(500);
  const post = posts.find((p) => p.id === id);
  return post;
}

export async function createPost(data) {
  await delay(500);
  const maxId = posts.length > 0 ? Math.max(...posts.map((p) => p.id)) : 0;
  const newPost = { id: maxId + 1, ...data, author: "You" };
  posts = [newPost, ...posts]; // Prepend new post to the top
  return newPost;
}

export async function updatePost(id, updates) {
  await delay(500);
  const post = posts.find((p) => p.id === id);
  if (!post) {
    throw new Error("No post found for", id);
  }
  Object.assign(post, updates);
  return post;
}

export async function deletePost(id) {
  await delay(500);
  const index = posts.findIndex((p) => p.id === id);
  if (index > -1) {
    posts.splice(index, 1);
    return true;
  }
  return false;
}