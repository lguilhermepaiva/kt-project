import { UnitUseCase } from 'src/common/application/ports/in/use-case';
import { CreateClientCommand } from '../commands/create-client.command';

export abstract class CreateClientUseCase extends UnitUseCase<CreateClientCommand> {}
