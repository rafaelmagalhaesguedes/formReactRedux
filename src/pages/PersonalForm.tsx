import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';
import { savePersonal } from '../redux/actions';

const UF_LIST = [
  'Rio de Janeiro',
  'Minas Gerais',
  'Amapá',
  'Amazonas',
  'São Paulo',
  'Ceará',
  'Distrito Federal',
];

function PersonalForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
    uf: '',
  });
  const { name, email, cpf, address, city, uf } = form;

  const validate = () => {
    return name.length > 0
      && email.length > 0
      && cpf.length > 0
      && address.length > 0
      && city.length > 0
      && uf.length > 0;
  };

  const handleChange = (
    { target }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name: targetName, value } = target;
    setForm({ ...form, [targetName]: value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(savePersonal(form));
    if (validate()) navigate('/professional-form');
  };

  return (
    <form>
      <h1 className="title">Informações Pessoais</h1>
      <Input
        label="Nome: "
        type="text"
        onChange={ handleChange }
        value={ name }
        name="name"
        required
      />
      <Input
        label="Email: "
        type="text"
        onChange={ handleChange }
        value={ email }
        name="email"
        required
      />
      <Input
        label="Cpf: "
        type="text"
        onChange={ handleChange }
        value={ cpf }
        name="cpf"
        required
      />
      <Input
        label="Endereço: "
        type="text"
        onChange={ handleChange }
        value={ address }
        name="address"
        required
      />
      <Input
        label="Cidade: "
        type="text"
        onChange={ handleChange }
        name="city"
        value={ city }
        required
      />
      <Select
        defaultOption="Selecione"
        onChange={ handleChange }
        value={ uf }
        label="Estado: "
        name="uf"
        options={ UF_LIST }
      />
      <Button
        onClick={ handleSubmit }
        type="submit"
        label="Próximo"
        moreClasses="is-fullwidth is-info"
      />
    </form>
  );
}

export default PersonalForm;
