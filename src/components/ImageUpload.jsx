import React, { useState } from "react";

const AddNote = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <textarea
        placeholder="Write a note..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border p-2"
      ></textarea>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2">
        Add Note
      </button>
    </form>
  );
};

export default AddNote;
