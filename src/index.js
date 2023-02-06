import "./index.css";
import App from "./App";
import AddNote from "./AddNote";
import EditNote from "./EditNote";
import ViewNotes from "./ViewNotes";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <ViewNotes />,
      },
      {
        path: "/notes",
        element: <ViewNotes />,
      },
      {
        path: "/notes/add",
        element: <AddNote />,
      },
      {
        path: "/notes/edit",
        element: <EditNote />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
