import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateProductBodyDto } from './dto/create-product-body.dto';
import { UpdateProductBodyDto } from './dto/update-product-body.dto';
import { Product } from './entity/product.entity';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async postProduct(
    @Body() createProductDto: CreateProductBodyDto,
  ): Promise<Product> {
    return await this.productService.postProduct(createProductDto);
  }

  @Get()
  async getProducts(): Promise<Product[]> {
    return this.productService.getProducts();
  }

  @Get(':offerId')
  async getProduct(@Param('offerId') offerId: string): Promise<Product> {
    return await this.productService.getProduct(offerId);
  }

  @Put(':offerId')
  async updateProduct(
    @Param('offerId') offerId: string,
    @Body() updateProductBodyDto: UpdateProductBodyDto,
  ): Promise<Product> {
    return await this.productService.updateProduct(
      offerId,
      updateProductBodyDto,
    );
  }

  @Delete(':offerId')
  async deleteProduct(@Param('offerId') offerId: string): Promise<Product> {
    return await this.productService.deleteProduct(offerId);
  }
}
