import { format } from 'date-fns';
import { ValueObject } from './value-object';

export type dateVOProps = Date;

export class DateVO extends ValueObject<dateVOProps> {
  get date(): Date {
    return this.props;
  }

  public getDate(): Date {
    return this.date;
  }

  public toString(): string {
    return format(this.date, 'dd/MM/yy');
  }

  equals(vo: DateVO): boolean {
    return this.date.getTime() === vo.getDate().getTime();
  }

  public static create(): DateVO;
  public static create(date: Date): DateVO;
  public static create(date: string): DateVO;
  public static create(date?: Date | string): DateVO {
    if (!date) {
      return new DateVO(new Date());
    }
    if (typeof date === 'string') {
      const [day, month, year] = date.split('/').map(Number);

      if (day && month && year)
        return new DateVO(new Date(year, month - 1, day));
      return new DateVO(new Date(date));
    }
    return new DateVO(date);
  }
}
