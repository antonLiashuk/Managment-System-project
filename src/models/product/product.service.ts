import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductBodyDto } from './dto/create-product-body.dto';
import { UpdateProductBodyDto } from './dto/update-product-body.dto';
import { Product } from './entity/product.entity';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductRepository)
    private productRepository: ProductRepository,
  ) {}

  async postProduct(createProductDto: CreateProductBodyDto): Promise<Product> {
    const { name, description, price } = createProductDto;
    const product = this.productRepository.create({
      name,
      description,
      price,
    });
    return await this.productRepository.save(product);
  }

  async getProducts() {
    return await this.productRepository.find();
  }

  async getProduct(productId: string): Promise<Product> {
    return await this.productRepository.findOne({ where: { id: productId } });
  }

  async updateProduct(
    productId: string,
    updateProductBodyDto: UpdateProductBodyDto,
  ): Promise<Product> {
    const { name, description, price, quantity } = updateProductBodyDto;
    const updatedProduct = this.productRepository.create({
      id: productId,
      name,
      description,
      price,
      quantity,
    });
    return await this.productRepository.save(updatedProduct);
  }

  async deleteProduct(productId: string): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: { id: productId },
    });
    const deleteResult = await this.productRepository.delete({ id: productId });
    console.log(JSON.stringify(deleteResult));
    return product;
  }
}
