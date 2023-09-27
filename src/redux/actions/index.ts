import { PersonalType, ProfessionalType } from '../../types';

export const PERSONAL_DATA = 'PERSONAL_DATA';
export const PROFESSIONAL_DATA = 'PROFESSIONAL_DATA';

export const savePersonal = (payload: PersonalType) => ({
  type: PERSONAL_DATA,
  payload,
});

export const saveProfessional = (payload: ProfessionalType) => ({
  type: PROFESSIONAL_DATA,
  payload,
});
