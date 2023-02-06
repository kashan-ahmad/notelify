import { createContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const AppContext = createContext({
  notes: [],
  setNotes: () => {},
});

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div
      style={{
        minWidth: "768px",
      }}
      className="vh-100 p-3 p-md-4 d-flex flex-column"
    >
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink
            end
            to="/notes"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Notes
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            end
            to="/notes/add"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Add Note
          </NavLink>
        </li>
      </ul>
      <div className="flex-grow-1 border-start border-end border-bottom p-3 p-md-4">
        <AppContext.Provider value={{ notes, setNotes }}>
          <Outlet />
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
