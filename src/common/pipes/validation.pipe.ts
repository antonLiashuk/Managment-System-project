import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  NotFoundException,
} from '@nestjs/common';
import { ProductService } from 'src/models/product/product.service';

@Injectable()
export class ValidationProductPipe implements PipeTransform {
  constructor(private readonly productService: ProductService) {}
  async transform(value: any, metadata: ArgumentMetadata) {
    const product = await this.productService.getProduct(value);
    if (product === undefined) {
      throw new NotFoundException('Product with the specified id not found');
    }
    return value;
  }
}
