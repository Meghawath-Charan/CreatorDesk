import { useState } from "react";

function CreateContent() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Blog");
  const [description, setDescription] = useState("");

  const saveDraft = () => {
    console.log({ title, type, description, status: "draft" });
  };

  const publish = () => {
    console.log({ title, type, description, status: "published" });
  };

  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="text-3xl font-bold">Create Content</h1>

      <input
        className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option>Blog</option>
        <option>Reel Script</option>
        <option>Video Idea</option>
      </select>

      <textarea
        className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2"
        rows="5"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="flex gap-4">
        <button
          onClick={saveDraft}
          className="px-6 py-2 bg-gray-700 rounded"
        >
          Save as Draft
        </button>
        <button
          onClick={publish}
          className="px-6 py-2 bg-purple-600 rounded"
        >
          Publish
        </button>
      </div>
    </div>
  );
}

export default CreateContent;
