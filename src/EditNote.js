import { AppContext } from "./App";
import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";

export default function EditNote() {
  const { state: index } = useLocation();
  const { notes, setNotes } = useContext(AppContext);

  const [title, setTitle] = useState(notes[index].title);
  const [description, setDescription] = useState(notes[index].description);

  function onSubmitListener(e) {
    e.preventDefault();

    const updatedNotes = notes.slice();
    updatedNotes[index] = { title, description };
    setNotes(updatedNotes);

    alert("Updated");
  }

  return (
    <form onSubmit={onSubmitListener}>
      <div className="mb-3">
        <label for="title" className="form-label">
          Title
        </label>
        <input
          required
          id="title"
          type="text"
          placeholder="..."
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label for="description" className="form-label">
          Description
        </label>
        <textarea
          required
          rows="3"
          id="description"
          placeholder="..."
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button className="btn btn-primary">Update</button>
    </form>
  );
}
