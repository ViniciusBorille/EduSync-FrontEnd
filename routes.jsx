import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastroUsuario from './src/Pages/CadastroUsuario/CadastroUsuario'
import Login from './src/Pages/Login/Login';
import EditarUsuario from "./src/Pages/EditarUsuario/EditarUsuario";
import CadastroAluno from "./src/Pages/CadastroAluno/CadastroAluno";

function Rotas() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/cadastrousuario' element={<CadastroUsuario />} />
          <Route path='/cadastroaluno' element={<CadastroAluno />} />
          <Route path='/login' element={<Login />} />
          <Route path='/editarusuario/:id' element={<EditarUsuario />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Rotas
