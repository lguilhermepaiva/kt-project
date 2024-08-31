import { Injectable } from '@nestjs/common';
import { ResultOrError } from 'src/common/domain/types/error/error';
import { CreateItemUseCase } from '../ports/in/use-cases/create-item.use-case';
import { CreateItemCommand } from '../ports/in/commands/create-item.command';
import { Item } from 'src/item/domain/item/item.domain';
import { ItemRepositoryPort } from '../ports/out/repositories/item.repository';

@Injectable()
export class CreateItemService implements CreateItemUseCase {
  constructor(private readonly clientRepository: ItemRepositoryPort) {}

  async execute(value: CreateItemCommand): Promise<ResultOrError<void>> {
    const client = Item.create({
      description: value.description,
      price: value.price,
    });

    return await this.clientRepository.persist(client);
  }
}
