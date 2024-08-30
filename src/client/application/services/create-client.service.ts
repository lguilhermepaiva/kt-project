import { Injectable } from '@nestjs/common';
import { CreateClientUseCase } from '../ports/in/use-cases/create-client.use-case';
import { ResultOrError } from 'src/common/domain/types/error/error';
import { CreateClientCommand } from '../ports/in/commands/create-client.command';
import { ClientRepositoryPort } from '../ports/out/repositories/client.repository';
import { Client } from 'src/client/domain/client/client.domain';

@Injectable()
export class CreateClientService implements CreateClientUseCase {
  constructor(private readonly clientRepository: ClientRepositoryPort) {}

  async execute(value: CreateClientCommand): Promise<ResultOrError<void>> {
    const client = Client.create({
      email: value.email,
      name: value.name,
      document: value.document,
      bornDate: value.bornDate,
    });

    return await this.clientRepository.persist(client);
  }
}
