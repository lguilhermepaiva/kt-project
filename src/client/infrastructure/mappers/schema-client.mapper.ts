import { Prisma } from '@prisma/client';
import { Client } from 'src/client/domain/client/client.domain';
import { DateVO } from 'src/common/domain/value-objects/date-vo';

type ClientSchema = Prisma.clientGetPayload<{}>;

export class ClientMapper {
  static toDomain(client: ClientSchema): Client {
    return Client.create({
      name: client.name,
      email: client.email,
      document: client.document,
      bornDate: DateVO.create(client.bornDate),
    });
  }

  static toPersistence(client: Client): Prisma.clientUncheckedCreateInput {
    return {
      name: client.name,
      email: client.email,
      document: client.document,
      bornDate: client.bornDate.date,
    };
  }
}
