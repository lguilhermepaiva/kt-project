import { Repository } from 'src/common/domain/types/repository';
import { Item } from 'src/item/domain/item/item.domain';

export abstract class ItemRepositoryPort extends Repository<Item> {}
