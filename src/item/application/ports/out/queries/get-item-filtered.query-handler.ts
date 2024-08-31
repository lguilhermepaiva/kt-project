import { UseCase } from 'src/common/application/ports/in/use-case';
import { GetItemFilteredQuery } from '../../in/queries/get-item-filtered.query';
import { ItemPresenter } from '../presenters/item.presenter';

export abstract class GetItemFilteredQueryHandler extends UseCase<
  GetItemFilteredQuery,
  ItemPresenter[]
> {}
