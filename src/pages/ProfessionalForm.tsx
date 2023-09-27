import { useState } from 'react';
import { useNavigate } from 'react-router';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';

function ProfessionalForm() {
  const navigate = useNavigate();
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
    if (validate) navigate('/form-display');
  };

  return (
    <form>
      <h1 className="title">Informações Profissionais</h1>
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
        moreClasses="is-fullwidth is-info"
      />
    </form>
  );
}
export default ProfessionalForm;
