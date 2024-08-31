import { Provider } from '@nestjs/common';
import { GetItemFilteredQueryHandler } from '../application/ports/out/queries/get-item-filtered.query-handler';
import { GetItemFilteredQueryHandlerImpl } from '../infrastructure/adapters/out/queries/get-item-filtered.query-handler.impl';

export const QueryProviders: Provider[] = [
  {
    provide: GetItemFilteredQueryHandler,
    useClass: GetItemFilteredQueryHandlerImpl,
  },
];
