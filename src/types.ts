export type PersonalType = {
  name: string;
  email: string;
  cpf: string;
  address: string;
  city: string;
  uf: string;
};

export type ProfessionalType = {
  resume: string;
  role: string;
  description: string;
};

export type Data = {
  personalData: PersonalType,
  professionalData: ProfessionalType,
};
