import { UseCase } from 'src/common/application/ports/in/use-case';
import { CreateItemCommand } from '../commands/create-item.command';

export abstract class CreateItemUseCase extends UseCase<
  CreateItemCommand,
  any
> {}
