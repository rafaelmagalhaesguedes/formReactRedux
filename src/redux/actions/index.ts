import { PersonalType, ProfessionalType } from '../../types';

export const PERSONAL_DATA = 'PERSONAL_DATA';
export const PROFESSIONAL_DATA = 'PROFESSIONAL_DATA';

export const savePersonal = (data: PersonalType) => ({
  type: PERSONAL_DATA,
  data,
});

export const saveProfessional = (data: ProfessionalType) => ({
  type: PROFESSIONAL_DATA,
  data,
});
