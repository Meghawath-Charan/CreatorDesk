import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { contentService } from "../services/appwrite/database";
import { useNavigate } from "react-router-dom";

const Drafts = () => {
  const { user } = useAuth();
  const [drafts, setDrafts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDrafts = async () => {
      try {
        const response = await contentService.getContentsByStatus(
          user.$id,
          "draft",
        );
        setDrafts(response.documents);
      } catch (error) {
        console.error("Failed to fetch drafts", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDrafts();
  }, [user]);

  if (loading) {
    return <div className="p-6">Loading drafts...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Drafts</h1>

      {drafts.length === 0 && <p>No drafts found.</p>}

      <ul className="space-y-3">
        {drafts.map((item) => (
          <li className="bg-white p-4 rounded shadow">
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.type}</p>
            <p className="mt-2">{item.description}</p>

            <div className="flex gap-3 mt-3">
              <button
                onClick={() => navigate(`/edit/${item.$id}`)}
                className="text-blue-600"
              >
                Edit
              </button>

              <button
                onClick={async () => {
                  await contentService.deleteContent(item.$id);
                  setDrafts(drafts.filter((d) => d.$id !== item.$id));
                }}
                className="text-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Drafts;
