import React from "react";

const Note = ({ note, onDelete }) => {
  return (
    <div className="bg-yellow-200 p-4 rounded shadow-md">
      <p>{note.text}</p>
      <button
        onClick={() => onDelete(note.id)}
        className="bg-red-500 text-white px-2 py-1 mt-2"
      >
        Delete
      </button>
    </div>
  );
};

export default Note;
