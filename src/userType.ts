export type Experience = {
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  title: string;
  description: string;
};

export type Personal = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  occupation: string;
};

export type User = {
  personalInformation: Personal;
  professionalExperience: Experience[];
  skills: string[];
};
