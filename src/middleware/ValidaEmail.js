import * as Yup from 'yup';

const ValidaEmail = Yup.string()
  .email()
  .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, "Formato inválido");

  export default ValidaEmail;