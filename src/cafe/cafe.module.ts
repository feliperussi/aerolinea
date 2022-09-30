import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CafeEntity } from './cafe.entity';

@Module({
    imports:  [TypeOrmModule.forFeature([CafeEntity])],
})
export class CafeModule {}
