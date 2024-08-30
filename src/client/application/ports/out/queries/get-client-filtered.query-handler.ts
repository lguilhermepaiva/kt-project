import { UseCase } from 'src/common/application/ports/in/use-case';
import { GetClientFilteredQuery } from '../../in/queries/get-client-filtered.query';
import { ClientPresenter } from '../presenters/client.presenter';

export abstract class GetClientFilteredQueryHandler extends UseCase<
  GetClientFilteredQuery,
  ClientPresenter[]
> {}
