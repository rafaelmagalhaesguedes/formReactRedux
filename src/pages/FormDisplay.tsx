import { useSelector } from 'react-redux';
import { Data } from '../types';

function FormDisplay() {
  const root = useSelector((state: Data) => state);
  const { personalData, professionalData } = root;
  const { name, email, cpf, address, city, uf } = personalData;
  const { resume, role, description } = professionalData;

  return (
    <section>
      <h1>Dados Enviados</h1>
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
    </section>
  );
}

export default FormDisplay;
