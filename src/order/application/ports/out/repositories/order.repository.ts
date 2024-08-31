import { Repository } from 'src/common/domain/types/repository';
import { Order } from 'src/order/domain/order.domain';

export abstract class OrderRepositoryPort extends Repository<Order> {}
