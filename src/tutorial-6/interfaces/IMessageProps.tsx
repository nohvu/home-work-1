import { IComm } from "../interfaces/IComm";

export type removeFunc = (index: number) => void;
export interface IMessageProps {
  user: IComm;
  index: number;
  removeComm: removeFunc;
}
