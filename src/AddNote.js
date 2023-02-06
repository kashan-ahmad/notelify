import { AppContext } from "./App";
import React, { useContext, useState } from "react";

export default function AddNote() {
  const { notes, setNotes } = useContext(AppContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function onSubmitListener(e) {
    e.preventDefault();

    setNotes([
      ...notes,
      {
        title,
        description,
      },
    ]);

    alert("Added");
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
      <button className="btn btn-primary">Add</button>
    </form>
  );
}
