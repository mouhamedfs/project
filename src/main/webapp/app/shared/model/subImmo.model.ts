export interface ISubImmo {
  numSub?: number;
  numImmo?: number;
  tauxAmort?: number;
  montant?: number;
  cptResulSub?: string;
  tauxSubv?: number;
  dateServImmo?: Date | null;
  modeAmortSubv?: number;
}

export const defaultValue: Readonly<ISubImmo> = {};
