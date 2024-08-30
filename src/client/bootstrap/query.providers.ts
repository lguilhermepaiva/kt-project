import { Provider } from '@nestjs/common';
import { GetClientFilteredQueryHandler } from '../application/ports/out/queries/get-client-filtered.query-handler';
import { GetClientFilteredQueryHandlerImpl } from '../infrastructure/adapters/out/queries/get-client-filtered.query-handler.impl';

export const QueryProviders: Provider[] = [
  {
    provide: GetClientFilteredQueryHandler,
    useClass: GetClientFilteredQueryHandlerImpl,
  },
];
