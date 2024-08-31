import { Injectable } from '@nestjs/common';
import { UseCase } from 'src/common/application/ports/in/use-case';
import { GetClientByIdQuery } from '../../in/queries/get-client-by-id.query';
import { ClientPresenter } from '../presenters/client.presenter';

@Injectable()
export abstract class GetClientByIdQueryHandler extends UseCase<
  GetClientByIdQuery,
  ClientPresenter
> {}
