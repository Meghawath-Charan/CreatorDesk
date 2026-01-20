import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { contentService } from "../services/appwrite/database";

const CreateContent = () => {
  const { user } = useAuth();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("draft");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!title || !type) {
      setMessage("Title and Type are required");
      return;
    }

    try {
      await contentService.createContent({
        title,
        description,
        type,
        status,
        userId: user.$id,
      });

      setMessage("Content saved successfully ✅");

      setTitle("");
      setDescription("");
      setType("");
      setStatus("draft");
    } catch (error) {
      console.error(error);
      setMessage("Failed to save content ❌");
    }
  };

  return (
  <div className="bg-white p-6 rounded shadow max-w-xl">
    <h1 className="text-2xl font-bold mb-4">Create Content</h1>

    {message && <p className="mb-3 text-sm">{message}</p>}

    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        className="w-full border p-2 rounded"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="w-full border p-2 rounded"
        placeholder="Type (Post, Reel...)"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />

      <textarea
        className="w-full border p-2 rounded"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select
        className="w-full border p-2 rounded"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="draft">Draft</option>
        <option value="published">Published</option>
      </select>

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Save Content
      </button>
    </form>
  </div>
);

};

export default CreateContent;
