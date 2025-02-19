import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import routes from "@/routes"; // Ensure routes are properly imported
// import Layout from './widgets/layout/Layout'; // Layout wrapper for consistent layout
import menu, { MenuBar } from './components/menu.jsx';

// Import the new components
import Blog from './pages/resources/blog.jsx'; // Import Blog component
import PostDetail from './pages/resources/post.jsx'; // Import PostDetail component

function App() {
  return (
    <>
      {/* Menu Bar stays fixed */}
      <MenuBar />

      {/* Content Area below the Menu */}
      <div className="mt-16"> {/* Added margin-top to push content below the fixed menu bar */}
        <Routes>
          {/* Existing routes from `routes.js` */}
          {routes.map(({ path, element }, key) => (
            <Route key={key} path={path} element={element} />
          ))}

          {/* New routes for Blog and PostDetail */}
          <Route path="/blog" element={<Blog />} /> {/* Route for the blog list */}
          <Route path="/post/:postId" element={<PostDetail />} /> {/* Route for full post details */}

          {/* Default Route */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
