import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { Section } from './Styles';

function Home() {
  return (
    <Section>
      <Link to="/personal-form">
        <Button
          label="Preencher Formulário"
          moreClasses="text-center is-info is-large is-fullwidth"
          type="button"
        />
      </Link>
    </Section>
  );
}

export default Home;
