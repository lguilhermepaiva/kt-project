import { IsNotEmpty, IsString } from 'class-validator';
import { CreateItemCommand } from 'src/item/application/ports/in/commands/create-item.command';

export class CreateItemRequest {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  price: number;

  static toCommand(request: CreateItemRequest): CreateItemCommand {
    return new CreateItemCommand({
      description: request.description,
      price: request.price,
    });
  }
}
