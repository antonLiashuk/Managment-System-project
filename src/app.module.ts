import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './models/product/entity/product.entity';
import { ProductModule } from './models/product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'postgres',
      entities: [Product],
      synchronize: true,
    }),
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
