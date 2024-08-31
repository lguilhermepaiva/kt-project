import { DateVO } from '../domain/value-objects/date-vo';

export interface ClientContract {
  name: string;
  email: string;
  document: string;
  bornDate: DateVO;
}
