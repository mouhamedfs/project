export interface IJob {
  id?: number;
  nomJob?: string;
  salaireMin?: number;
  salaireMax?: number;
}

export const defaultValue: Readonly<IJob> = {};
