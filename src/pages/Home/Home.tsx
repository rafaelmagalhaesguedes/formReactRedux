import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { Section } from './Styles';

function Home() {
  const navigate = useNavigate();
  return (
    <Section>
      <Button
        label="Preencher Formulário"
        moreClasses="button-home"
        type="button"
        onClick={ () => navigate('/personal-form') }
      />
    </Section>
  );
}

export default Home;
