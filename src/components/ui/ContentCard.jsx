function ContentCard({ title, type, description, status, onEdit, onDelete }) {
  const isDraft = status === "draft";

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl p-5 space-y-3">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-400">{type}</p>
        </div>

        <span
          className={`text-xs px-2 py-1 rounded ${
            isDraft
              ? "bg-yellow-600 text-black"
              : "bg-green-600 text-black"
          }`}
        >
          {isDraft ? "Draft" : "Published"}
        </span>
      </div>

      <p className="text-gray-300 text-sm line-clamp-2">
        {description}
      </p>

      <div className="flex gap-3 pt-2">
        {isDraft && (
          <button
            onClick={onEdit}
            className="text-sm px-4 py-1 rounded bg-gray-700 hover:bg-gray-600"
          >
            Edit
          </button>
        )}

        <button
          onClick={onDelete}
          className="text-sm px-4 py-1 rounded bg-red-600 hover:bg-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ContentCard;
