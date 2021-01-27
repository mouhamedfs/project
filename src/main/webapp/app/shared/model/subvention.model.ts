export interface ISubvention {
  numSub?: number;
  mntSubv?: number;
  dateOctSub?: Date | null;
  libSubv?: string;
  dejaDepense?: number;
  cptSubVire?: string;
  cptSubRep?: string;
}
export const defaultValue: Readonly<ISubvention> = {};
