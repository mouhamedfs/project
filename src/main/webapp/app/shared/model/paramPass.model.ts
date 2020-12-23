export interface IParamPass {
  numNumbers?: number;
  numUpper?: number;
  numSpecial?: number;
  dateDef?: Date | null;
  minLength?: number;
  libelleParam?: string;
  freqModif?: number;
  nbreJourActiv?: number;
  nbrePasseAnt?: number;
  nbJourAvModif?: number;
}

export const defaultValue: Readonly<IParamPass> = {};
