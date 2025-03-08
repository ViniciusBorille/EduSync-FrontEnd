import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../api';
import './CadastroUsuario.css';
import ValidaInput from '../../middleware/ValidaInput';

function CadastroUsuario() {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    cpf: '',
    email: '',
    senha: '',
    telefone: '',
    telefone2: '',
    data_nascimento: '',
    tipo_usuario: 'aluno',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validarFormulario = () => {
    if (!formData.nome || !formData.sobrenome || !formData.email || !formData.senha || !formData.data_nascimento) {
      alert('Todos os campos são obrigatórios!');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validarFormulario()) return;

    try {
      await api.post('/cadusuario', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (formData.tipo_usuario === 'aluno') {
        navigate('/cadastroaluno');
      } else {
        alert('Usuário cadastrado com sucesso!');
      }
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error.response?.data || error.message);
      alert('Erro ao cadastrar usuário: ' + (error.response?.data?.message || 'Erro desconhecido'));
    }
  };

  return (
    <div className="page-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <h1>Cadastro</h1>
        <input type="text" name="nome" className="form-input" value={formData.nome} placeholder="Nome" onChange={handleChange} required />
        <input type="text" name="sobrenome" className="form-input" value={formData.sobrenome} placeholder="Sobrenome" onChange={handleChange} required />
        <input type="text" name="cpf" className="form-input" value={formData.cpf} placeholder="CPF" onChange={handleChange} required />
        <input type="email" name="email" className="form-input" value={formData.email} placeholder="Email" onChange={handleChange} required />
        <input type="password" name="senha" className="form-input" value={formData.senha} placeholder="Senha" onChange={handleChange} required />
        <input type="text" name="telefone" className="form-input" value={formData.telefone} placeholder="Telefone" onChange={handleChange} required />
        <input type="text" name="telefone2" className="form-input" value={formData.telefone2} placeholder="Telefone Alternativo" onChange={handleChange} />
        <input type="date" name="data_nascimento" className="form-input" value={formData.data_nascimento} placeholder="Data de nascimento" onChange={handleChange} required />
        <select name="tipo_usuario" className="form-select" value={formData.tipo_usuario} onChange={handleChange}>
          <option value="aluno">Aluno</option>
          <option value="funcionario">Funcionário</option>
          <option value="professor">Professor</option>
          <option value="responsavel">Responsável</option>
        </select>
        <button type="submit" className="form-button">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroUsuario;
