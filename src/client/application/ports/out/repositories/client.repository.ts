import { Client } from 'src/client/domain/client/client.domain';
import { Repository } from 'src/common/domain/types/repository';

export abstract class ClientRepositoryPort extends Repository<Client> {}
