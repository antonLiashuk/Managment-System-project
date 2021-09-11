import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ValidationProductPipe } from 'src/common/pipes/validation.pipe';
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

  @Get(':productId')
  async getProduct(
    @Param('productId', ValidationProductPipe) productId: string,
  ): Promise<Product> {
    return await this.productService.getProduct(productId);
  }

  @Put(':productId')
  async updateProduct(
    @Param('productId', ValidationProductPipe) productId: string,
    @Body() updateProductBodyDto: UpdateProductBodyDto,
  ): Promise<Product> {
    return await this.productService.updateProduct(
      productId,
      updateProductBodyDto,
    );
  }

  @Delete(':productId')
  async deleteProduct(@Param('productId') productId: string): Promise<Product> {
    return await this.productService.deleteProduct(productId);
  }
}
