import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";
import Other from "./pages/other";
import About from "./pages/about";
import Software from "./pages/Software";

function App() {
  const location = useLocation();
  const pathname = location.pathname;

  const showHeader = pathname !== "/sign-in" && pathname !== "/sign-up";

  return (
    <>
      {showHeader && (
        <header className="bg-transparent fixed top-0 w-full z-50">
          <div className="container mx-auto">
            <Navbar routes={routes} />
          </div>
        </header>
      )}

      {/* Page Content */}  
      <div className="pt-16">  
        <Routes>
          {routes.map(
            ({ path, element }, key) =>
              element && <Route key={key} exact path={path} element={element} />
          )}

          {/* Static Path Routes */}
          <Route path="/other" element={<Other />} />
          <Route path="/about" element={<About />} />

          {/* Dynamic Software Page */}
          <Route path="/software" element={<Navigate to="/software/cloud-vs-on-premise" replace />} />
          <Route path="/software/:category" element={<Software />} />

          {/* Catch-All Redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
