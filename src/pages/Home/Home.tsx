import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { Section } from './Styles';

function Home() {
  return (
    <Section>
      <Link to="/personal-form">
        <Button
          label="Preencher Formulário"
          moreClasses="button-home"
          type="button"
        />
      </Link>
    </Section>
  );
}

export default Home;
