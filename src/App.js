import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/index.jsx";
import Home from "./pages/Checkout";
import NotFound from "./pages/NotFound/index.jsx";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
