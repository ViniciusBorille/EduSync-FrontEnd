import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../../api';
import './EditarUsuario.css'; // Importa o CSS

function EditarUsuario() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    login: '',
    senha: '',
    tipo: 'prof',
  });

  useEffect(() => {
    api.get(`/buscausuario/${id}`)
      .then((response) => setFormData(response.data))
      .catch((error) => console.error('Erro ao buscar usuário:', error));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.patch(`/atualizausuario/${id}`, formData);
      navigate('/listausuarios');
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
    }
  };

  return (
    <div className="page-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          name="login"
          className="form-input"
          value={formData.login}
          placeholder="Login"
          onChange={handleChange}
        />
        <input
          type="password"
          name="senha"
          className="form-input"
          value={formData.senha}
          placeholder="Senha"
          onChange={handleChange}
        />
        <select
          name="tipo"
          className="form-select"
          value={formData.tipo}
          onChange={handleChange}
        >
          <option value="prof">Professor</option>
          <option value="alu">Aluno</option>
        </select>
        <button type="submit" className="form-button">Salvar</button>
      </form>
    </div>
  );
}

export default EditarUsuario;
