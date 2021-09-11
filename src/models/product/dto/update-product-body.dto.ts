import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProductBodyDto {
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: `Enter the product's name`,
  })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: `Enter the product's description`,
  })
  description: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: `Enter the product's price`,
  })
  price: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: `Enter the product's price`,
  })
  quantity: number;
}
