import { AppContext } from "./App";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function ViewNotes() {
  const navigate = useNavigate();
  const { notes, setNotes } = useContext(AppContext);

  const onRemoveListener = (index) => () => {
    const updatedNotes = notes.slice();
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const onEditListener = (index) => () => {
    navigate("/notes/edit", {
      state: index,
    });
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {notes.map((note, index) => (
          <tr key={index}>
            <td>{index}</td>
            <td>{note.title}</td>
            <td>{note.description}</td>
            <td>
              <div role="group" className="btn-group">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onEditListener(index)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={onRemoveListener(index)}
                >
                  Remove
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
