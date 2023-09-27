import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { saveProfessional } from '../../redux/actions';
import Input from '../../components/Input/Input';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import { ContainerForm, Forms } from './Styles';
import { Title } from '../PersonalForm/Styles';

function ProfessionalForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    resume: '',
    role: '',
    description: '',
  });
  const { resume, role, description } = form;

  const handleChange = (
    { target }: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const validate = resume.length > 0 && role.length > 0 && description.length > 0;

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(saveProfessional(form));
    if (validate) navigate('/form-display');
  };

  return (
    <ContainerForm>
      <Forms>
        <Title>Informações Profissionais</Title>
        <TextArea
          label="Resumo do currículo: "
          value={ resume }
          name="resume"
          maxLength="1000"
          onChange={ handleChange }
          required
        />
        <Input
          label="Cargo:"
          name="role"
          type="text"
          value={ role }
          onChange={ handleChange }
          required
        />
        <TextArea
          label="Descrição do cargo: "
          name="description"
          maxLength="500"
          onChange={ handleChange }
          value={ description }
          required
        />
        <Button
          onClick={ handleSubmit }
          type="submit"
          label="Enviar"
          moreClasses="button-form-pro"
        />
      </Forms>
    </ContainerForm>
  );
}
export default ProfessionalForm;
