/* eslint-disable prettier/prettier */
import { TypeOrmModule } from '@nestjs/typeorm';
import { CafeEntity } from '../../cafe/cafe.entity';
import { TiendaEntity } from '../../tienda/tienda.entity';
import { AirlineEntity } from '../../airline/airline.entity';
import { AirportEntity } from '../../airport/airport.entity';

export const TypeOrmTestingConfig = () => [
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: ':memory:',
    dropSchema: true,
    entities: [AirlineEntity, AirportEntity, CafeEntity, TiendaEntity],
    synchronize: true,
    keepConnectionAlive: true 
  }),
  TypeOrmModule.forFeature([AirlineEntity, AirportEntity, CafeEntity, TiendaEntity]),
];