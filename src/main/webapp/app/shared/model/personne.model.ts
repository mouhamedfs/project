export interface IPersonne {
  id?: number;
  nom?: string;
  prenom?: string;
  age?: number;
  adresse?: string;
  email?: string;
}

export const defaultValue: Readonly<IPersonne> = {};
