import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../api';
import './CadastroUsuario.css';

function CadastroUsuario() {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
    telefone: '',
    telefone2: '',
    data_nascimento: '',
    tipo_usuario: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Dados enviados:', formData);
    try {
      await api.post('/cadusuario', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if(tipo_usuario == 'aluno'){
        navigate('/cadastroaluno')
      }
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
    }
  };

  return (
    <div className="page-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <h1>Cadastro</h1>
        <input
          type="text"
          name="nome"
          className="form-input"
          value={formData.nome}
          placeholder="Nome"
          onChange={handleChange}
        />
        <input
          type="text"
          name="sobrenome"
          className="form-input"
          value={formData.sobrenome}
          placeholder="Sobrenome"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          className="form-input"
          value={formData.email}
          placeholder="Email"
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
        <input
          type="text"
          name="telefone"
          className="form-input"
          value={formData.telefone}
          placeholder="Telefone"
          onChange={handleChange}
        />
        <input
          type="text"
          name="telefone2"
          className="form-input"
          value={formData.telefone2}
          placeholder="Telefone"
          onChange={handleChange}
        />
        <input
          type="date"
          name="data_nascimento"
          className="form-input"
          value={formData.data_nascimento}
          placeholder="Data de nascimento"
          onChange={handleChange}
        />
        <select
          name="tipo_usuario"
          className="form-select"
          value={formData.tipo_usuario}
          onChange={handleChange}
        >
          <option value="professor">Professor</option>
          <option value="aluno">Aluno</option>
          <option value="funcionario">Funcionário</option>
          <option value="responsavel">Responsável</option>
        </select>
        <button type="submit" className="form-button">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroUsuario;
