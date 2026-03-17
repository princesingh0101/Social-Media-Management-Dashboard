// src/EditPost.jsx
import {
  Form,
  useLoaderData,
  redirect,
  useNavigation,
  Link,
  useLocation,
} from "react-router-dom";
import { getPost, updatePost } from "./posts";

// This loader fetches the specific post's data before the component renders.
export async function loader({ params }) {
  const post = await getPost(parseInt(params.postId, 10));
  if (!post) {
    throw new Response("", { status: 404, statusText: "Post Not Found" });
  }
  return { post };
}

// This action handles the form submission to update the post.
export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = { text: formData.get("text") };
  await updatePost(parseInt(params.postId, 10), updates);
  return redirect(`/home`);
}

export default function EditPost() {
  const { post } = useLoaderData();
  const navigation = useNavigation();
  const location = useLocation();

  const isSubmitting = navigation.state === "submitting";

  // Distinguish between saving and deleting based on the form's action
  const isSaving =
    isSubmitting && navigation.formAction === location.pathname;

  const isDeleting =
    isSubmitting && navigation.formAction.endsWith("/destroy");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Post</h2>
      <Form method="post" style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}>
        <label htmlFor="text">Post Content:</label>
        {/* Use defaultValue to pre-fill the form */}
        <textarea name="text" id="text" rows="4" defaultValue={post.text} required />
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <button type="submit" disabled={isSubmitting}>
            {isSaving ? "Saving..." : "Save Changes"}
          </button>
          <Form
            method="post"
            action="../destroy"
            onSubmit={(event) => {
              if (
                !confirm("Please confirm you want to delete this record.")
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit" disabled={isSubmitting} style={{ background: '#dc3545', color: 'white' }}>
              {isDeleting ? "Deleting..." : "Delete"}
            </button>
          </Form>
          <Link to="/home" style={{ marginLeft: 'auto' }}>Cancel</Link>
        </div>
      </Form>
    </div>
  );
}