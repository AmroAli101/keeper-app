import React from "react";

function CreateArea({ title, content, setTitle, setContent, handleAddNote, disableButton }) {
  const handleSubmit = (e) => {
    e.preventDefault(); 
    handleAddNote();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" disabled={disableButton}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
