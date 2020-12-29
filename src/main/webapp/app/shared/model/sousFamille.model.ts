export interface ISousFamille {
  csfam?: string;
  libsfam?: string;
  cfam?: string;
  cptimmo?: string;
  cptamort?: string;
  cptdot?: string;
  intitcpt?: string;
  taux?: number;
  duree?: number;
  item?: string;
  inventaire?: boolean;
  tauxValLocPatente?: number;
  tauxValLocImpot?: number;
  tauxImpot?: number;
  tauxPatente?: number;
}

export const defaultValue: Readonly<ISousFamille> = {};
