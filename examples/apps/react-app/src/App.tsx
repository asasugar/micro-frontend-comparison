import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.less";

declare global {
  interface Window {
    __POWERED_BY_WUJIE__?: boolean;
    __WUJIE_PUBLIC_PATH__?: string;
  }
}

const App: React.FC = () => {
  const basename = window.__POWERED_BY_WUJIE__ ? "/" : "/";

  return (
    <Router basename={basename}>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;