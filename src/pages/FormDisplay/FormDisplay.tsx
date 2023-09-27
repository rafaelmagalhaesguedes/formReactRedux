import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Data } from '../../types';
import { Section, Wrapper, ButtonBack } from './Styles';
import { Title } from '../PersonalForm/Styles';

function FormDisplay() {
  const navigate = useNavigate();
  const root = useSelector((state: Data) => state);
  const { personalData, professionalData } = root;
  const { name, email, cpf, address, city, uf } = personalData;
  const { resume, role, description } = professionalData;

  return (
    <Section>
      <Wrapper>
        <Title>Dados Enviados</Title>
        <div>
          {`Nome: 
          ${name}`}
        </div>
        <div>
          {`Email: 
          ${email}`}
        </div>
        <div>
          {`CPF: 
          ${cpf}`}
        </div>
        <div>
          {`Endereço: 
          ${address}`}
        </div>
        <div>
          {`Cidade: 
          ${city}`}
        </div>
        <div>
          {`Estado: 
          ${uf}`}
        </div>
        <div>
          {`Currículo: 
          ${resume}`}
        </div>
        <div>
          {`Cargo: 
          ${role}`}
        </div>
        <div>
          {`Descrição do cargo: 
          ${description}`}
        </div>
        <ButtonBack
          onClick={ () => navigate('/') }
        >
          Voltar
        </ButtonBack>
      </Wrapper>
    </Section>
  );
}

export default FormDisplay;
