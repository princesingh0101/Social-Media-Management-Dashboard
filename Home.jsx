// src/Home.jsx
import { useLoaderData, Link, Form } from "react-router-dom";

function Home() {
  // The `posts` object comes from the loader in main.jsx
  const { posts } = useLoaderData();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Recent Posts</h2>
      <Link to="/posts/new" style={{ marginBottom: '20px', display: 'inline-block' }}>
        + New Post
      </Link>
      <div>
        {posts && posts.map(post => (
          <div key={post.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
            <p>{post.text}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
              <small>by {post.author}</small>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Link to={`/posts/${post.id}/edit`}>Edit</Link>
                <Form
                  method="post"
                  action={`/posts/${post.id}/destroy`}
                  onSubmit={(event) => {
                    if (
                      !confirm("Please confirm you want to delete this record.")
                    ) {
                      event.preventDefault();
                    }
                  }}
                >
                  <button type="submit" style={{ background: 'none', border: 'none', color: '#0d6efd', cursor: 'pointer', padding: 0, textDecoration: 'underline' }}>
                    Delete
                  </button>
                </Form>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;