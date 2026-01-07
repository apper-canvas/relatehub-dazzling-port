import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";

function App() {
  useEffect(() => {
    // Component initialization logic can be added here if needed
  }, []);
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;