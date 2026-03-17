// src/NewPost.jsx
import { Form, redirect, useNavigation, useActionData } from "react-router-dom";
import { createPost } from "./posts";

export async function action({ request }) {
  // 1. Get the form data from the request
  const formData = await request.formData();
  const text = formData.get("text");

  // Basic validation
  if (!text || text.trim().length === 0) {
    return { error: "Post content cannot be empty." };
  }

  // 2. Call your data mutation function
  const postData = { text };
  await createPost(postData);

  // 3. Redirect to a new page. This also triggers revalidation.
  return redirect(`/home`);
}

export default function NewPost() {
  const navigation = useNavigation();
  const actionData = useActionData();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create a New Post</h2>
      {/* The <Form> component will automatically call the action for this route */}
      <Form method="post" style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}>
        <label htmlFor="text">Post Content:</label>
        <textarea name="text" id="text" rows="4" required />
        {actionData?.error && <p style={{ color: "red" }}>{actionData.error}</p>}
        <button type="submit" disabled={isSubmitting} style={{ alignSelf: "flex-start" }}>
          {isSubmitting ? "Saving..." : "Save Post"}
        </button>
      </Form>
    </div>
  );
}