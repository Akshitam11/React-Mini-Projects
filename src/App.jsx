import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import "./App.css";

const DrumPage = lazy(() => import("./pages/DrumPage.jsx"));
const MousePositionPage = lazy(() => import("./pages/MousePositionPage.jsx"));
const WindowResizePage = lazy(() => import("./pages/WindowResizePage.jsx"));
const ToggleThemePage = lazy(() => import("./pages/ToggleThemePage.jsx"));
const CustomHookPage = lazy(() => import("./pages/CustomHookPage.jsx"));
const OnlineOfflinePage = lazy(() => import("./pages/OnlineOfflinePage.jsx"));
const FormUseRefPage = lazy(() => import("./pages/FormUseRefPage.jsx"));

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="page-shell">
        <Suspense fallback={<div className="route-loading">Loading project...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/drum" element={<DrumPage />} />
            <Route path="/mouse-position" element={<MousePositionPage />} />
            <Route path="/window-resize" element={<WindowResizePage />} />
            <Route path="/toggle-theme" element={<ToggleThemePage />} />
            <Route path="/custom-hook" element={<CustomHookPage />} />
            <Route path="/online-offline" element={<OnlineOfflinePage />} />
            <Route path="/form-useref" element={<FormUseRefPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
