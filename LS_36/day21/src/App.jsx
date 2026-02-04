import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Profile = lazy(() => import("./pages/Profile"));
const Settings = lazy(() => import("./pages/Settings"));

function App() {

  return (
    <>
        <BrowserRouter>
      <div className="p-6">
        <nav className="space-x-4 mb-6">
          <Link to="/" className="text-blue-600">Home</Link>
          <Link to="/dashboard" className="text-blue-600">Dashboard</Link>
        </nav>

        <Suspense fallback={<p>Loading page...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
