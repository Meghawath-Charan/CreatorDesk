import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { contentService } from "../services/appwrite/database";

const EditContent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("draft");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await contentService.getDocument(id);
        setTitle(res.title);
        setDescription(res.description);
        setType(res.type);
        setStatus(res.status);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContent();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await contentService.updateContent(id, {
        title,
        description,
        type,
        status,
      });
      navigate(status === "draft" ? "/drafts" : "/published");
    } catch (error) {
      setMessage("Update failed ❌");
    }
  };

  return (
    <div className="p-6 max-w-xl">
      <h1 className="text-2xl mb-4">Edit Content</h1>
      {message && <p>{message}</p>}

      <form onSubmit={handleUpdate} className="flex flex-col gap-3">
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <input value={type} onChange={(e) => setType(e.target.value)} />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
        <button className="bg-green-500 text-white p-2">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditContent;
