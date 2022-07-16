
import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login'
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import RutaPrivada from './utils/rutaPrivada';
import Usuarios from './pages/Usuarios';
import Productos from './pages/Productos';
import InsertProductos from './pages/InsertarProductos';
import EditProductos from './pages/editarProd';

function App() {
  return (
    <>
      <AuthProvider>
      <BrowserRouter>
     <Routes>

        <Route>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        

        <Route element={<RutaPrivada />}>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/usuarios" element={<Usuarios/>} />
          <Route path="/productos" element={<Productos/>} />
          <Route path="/addprod" element={<InsertProductos/>}/>
          <Route path="/editprod" element={<EditProductos/>}/>
        </Route>
        </Route>
      </Routes> 
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
