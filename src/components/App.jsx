import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddNote = () => {
    const newNote = { id: Date.now(), title, content };
    setNotes([...notes, newNote]);
    setTitle("");
    setContent("");
  };

 
  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div>
      <Header />
      <CreateArea
        title={title}
        content={content}
        setTitle={setTitle}
        setContent={setContent}
        handleAddNote={handleAddNote}
        disableButton={!title || !content}
      />
      {notes.map((note) => (
        <Note 
          key={note.id} 
          id={note.id} 
          title={note.title} 
          content={note.content} 
          onDelete={handleDeleteNote} 
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
