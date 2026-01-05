import { useState } from "react";

function CreateContent() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Blog");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleDraft = () => {
    const data = {
      title,
      type,
      description,
      status: "draft",
    };
    console.log("Draft Saved:", data);
  };

  const handlePublish = () => {
    const data = {
      title,
      type,
      description,
      status: "published",
    };
    console.log("Content Published:", data);
  };

  return (
    <div className="max-w-3xl space-y-8">
      <h1 className="text-3xl font-semibold">Create Content</h1>

      {/* Title */}
      <div className="space-y-2">
        <label className="text-sm text-gray-400">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter content title"
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
        />
      </div>

      {/* Content Type */}
      <div className="space-y-2">
        <label className="text-sm text-gray-400">Content Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
        >
          <option>Blog</option>
          <option>Reel Script</option>
          <option>Video Idea</option>
        </select>
      </div>

      {/* Description */}
      <div className="space-y-2">
        <label className="text-sm text-gray-400">Description</label>
        <textarea
          rows="5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write your content here..."
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
        />
      </div>

      {/* Image Upload */}
      <div className="space-y-2">
        <label className="text-sm text-gray-400">Thumbnail</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="text-gray-300"
        />
      </div>

      {/* Actions */}
      <div className="flex gap-4 pt-4">
        <button
          onClick={handleDraft}
          className="px-6 py-2 rounded-lg bg-gray-700 hover:bg-gray-600"
        >
          Save as Draft
        </button>
        <button
          onClick={handlePublish}
          className="px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-500"
        >
          Publish
        </button>
      </div>
    </div>
  );
}

export default CreateContent;
