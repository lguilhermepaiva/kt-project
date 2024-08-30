import { IsOptional, IsString } from 'class-validator';
import { GetClientFilteredQuery } from 'src/client/application/ports/in/queries/get-client-filtered.query';

export class GetClientFilteredRequest {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  document: string;

  static toQuery(request: GetClientFilteredRequest): GetClientFilteredQuery {
    return new GetClientFilteredQuery({
      name: request.name,
      document: request.document,
    });
  }
}
