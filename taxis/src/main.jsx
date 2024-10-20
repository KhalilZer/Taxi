import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import AdminList from './Pages/admin/adminList.jsx'
import Connexion from './Pages/admin/Connexion.jsx'
import Introuvable from './Pages/Introuvable.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/admin/" element={<Connexion />} />
        <Route
          path="/adminPanel/d12b90feb62f8335c0c260cabfa48ea1bea74a6a"
          element={<AdminList />}
        />
        <Route path="/" element={<App />} />
        <Route path="*" element={<Introuvable />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
