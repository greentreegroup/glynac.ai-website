import React from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import routes from "@/routes"; // Ensure routes are properly imported
import Layout from './widgets/layout/Layout'; // Layout wrapper for consistent layout

function App() {

  return (
    <>

      {/* Define Routes within Layout */}
      <Layout>
        <Routes>
          {routes.map(({ path, element }, key) => (
            <Route key={key} path={path} element={element} />
          ))}
          {/* Default Route */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
