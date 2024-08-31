import { Provider } from '@nestjs/common';
import { GetClientFilteredQueryHandler } from '../application/ports/out/queries/get-client-filtered.query-handler';
import { GetClientFilteredQueryHandlerImpl } from '../infrastructure/adapters/out/queries/get-client-filtered.query-handler.impl';
import { GetClientByIdQueryHandler } from '../application/ports/out/queries/get-client-by-id.query-handler-impl';
import { GetClientByIdQueryHandlerImpl } from '../infrastructure/adapters/out/queries/get-client-by-id.query-handler.impl';

export const QueryProviders: Provider[] = [
  {
    provide: GetClientFilteredQueryHandler,
    useClass: GetClientFilteredQueryHandlerImpl,
  },
  {
    provide: GetClientByIdQueryHandler,
    useClass: GetClientByIdQueryHandlerImpl,
  },
];
