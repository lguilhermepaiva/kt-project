import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { CreateClientCommand } from 'src/client/application/ports/in/commands/create-client.command';
import { DateVO } from 'src/common/domain/value-objects/date-vo';

export class CreateClientRequest {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  document: string;

  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  @IsDate()
  bornDate: Date;

  static toCommand(request: CreateClientRequest): CreateClientCommand {
    return new CreateClientCommand({
      name: request.name,
      email: request.email,
      document: request.document,
      bornDate: DateVO.create(request.bornDate),
    });
  }
}
