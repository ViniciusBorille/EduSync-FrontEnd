import * as Yup from 'yup';

const ValidaNome = Yup.string()
.max(100)
  .matches(/^[a-zA-ZÀ-ÿ]+( [a-zA-ZÀ-ÿ]+)*$/, "O nome pode conter apenas letras e espaços simples entre as palavras")
  .required("O nome é obrigatório");


const ValidaEmail = Yup.string() // Do tipo string
  .email() // deve ser no formato email
  .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, "Formato inválido") // pode possuir letras minusculas, numeros, alguns caracteres especiais, ai "@" + letras + . + 2 a 4 letras
  .required("O email é obrigatório"); // É obrigatorio


const ValidaSenha = Yup.string()  // Deve ser do tipo string
  .min(8, "A senha deve ter pelo menos 8 caracteres") // minimo 8 caracteres
  .max(24, "A senha deve ter no máximo 24 caracteres") // maximo 24 caracteres
  .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])\S*$/,
    "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número, um caractere especial e não pode conter espaços"
  ) // Deve conter pelo menos uma letra maiuscula, uma minuscula, um numero, um caracter especial
  .required("A senha é obrigatória"); // É obrigatório


const ValidaCPF = Yup.string() // Deve ser do tipo string
  .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "Formato de CPF inválido (use 000.000.000-00)") // Deve possuir 3 numeros inteiros + "." + 3 numeros + "." + 3 numeros + "-" + 2 numeros
  .required("O CPF é obrigatório"); // É obrigatório

const ValidaDataNascimento = Yup.date()
  .max(new Date(new Date().setFullYear(new Date().getFullYear() - 18)), "Você deve ter pelo menos 18 anos")
  .required("A data de nascimento é obrigatória");


export default {
  ValidaNome,
  ValidaEmail,
  ValidaSenha,
  ValidaCPF,
  ValidaDataNascimento
};