import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import routes from "@/routes"; // Ensure routes are properly imported
//import Layout from './widgets/layout/Layout'; // Layout wrapper for consistent layout
import menu, { MenuBar } from './components/menu.jsx'; 

function App() {
  return (
    <>
      {/* Menu Bar stays fixed */}
      <MenuBar />

      {/* Content Area below the Menu */}
      <div className="mt-16"> {/* Added margin-top to push content below the fixed menu bar */}
        <Routes>
          {routes.map(({ path, element }, key) => (
            <Route key={key} path={path} element={element} />
          ))}
          {/* Default Route */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </>
  );
}

export default App;


