import { useAuth } from './context/AuthContext'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import './App.css'

function App() {
  const { token } = useAuth();
  return token ? <Dashboard /> : <Login />;
}

export default App
