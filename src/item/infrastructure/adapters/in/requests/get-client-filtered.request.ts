import { IsNumber, IsOptional, IsString } from 'class-validator';
import { GetItemFilteredQuery } from 'src/item/application/ports/in/queries/get-item-filtered.query';

export class GetItemFilteredRequest {
  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsNumber()
  price: number;

  static toQuery(request: GetItemFilteredRequest): GetItemFilteredQuery {
    return new GetItemFilteredQuery({
      description: request.description,
      price: request.price,
    });
  }
}
