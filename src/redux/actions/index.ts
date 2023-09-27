import { PersonalType, ProfessionalType } from '../../types';

export const savePersonal = (data: PersonalType) => ({
  type: 'PERSONAL_DATA',
  data,
});

export const saveProfessional = (data: ProfessionalType) => ({
  type: 'PROFESSIONAL_DATA',
  data,
});
