import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importa los componentes de página
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import NavigationBar from './components/Navbar';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      {/* Navbar siempre visible */}
      <NavigationBar />

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Ruta para login*/}
        <Route path="/login" element={<Login />}/>

        {/* Ruta de fallback (404) */}
        <Route path="*" element={<div style={{ padding: '20px' }}>
          <h2>404 - Página no encontrada</h2>
        </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
