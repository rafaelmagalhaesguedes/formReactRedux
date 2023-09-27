import { Routes, Route } from 'react-router';
import Home from './pages/Home/Home';
import PersonalForm from './pages/PersonalForm/PersonalForm';
import ProfessionalForm from './pages/ProfessionalForm';
import FormDisplay from './pages/FormDisplay';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/personal-form" element={ <PersonalForm /> } />
        <Route path="/professional-form" element={ <ProfessionalForm /> } />
        <Route path="/form-display" element={ <FormDisplay /> } />
      </Routes>
    </main>
  );
}

export default App;
