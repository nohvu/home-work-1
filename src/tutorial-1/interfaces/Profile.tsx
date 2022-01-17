export interface IProfile {
  name: string;
  registredAt: Date;
  children?: Array<any>;
}

export interface IDateOptions {
  day: 'numeric' | '2-digit';
  month: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
  year: 'numeric' | '2-digit';
}