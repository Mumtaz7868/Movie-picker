import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, MovieDetails, Movies } from "./pages";
import Error from "./components/error/Error";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <Error /> },
  { path: "/random", element: <Home /> },
  { path: "/most-popular", element: <Movies /> },
  { path: "/movie/:id", element: <MovieDetails /> },
]);

const App = () => (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default App;
