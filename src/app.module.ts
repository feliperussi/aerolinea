import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AirlineModule } from './airline/airline.module';
import { AirportModule } from './airport/airport.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AirportEntity } from './airport/airport.entity';
import { AirlineEntity } from './airline/airline.entity';
import { AirlineAirportModule } from './airline-airport/airline-airport.module';
import { CafeModule } from './cafe/cafe.module';
import { TiendaModule } from './tienda/tienda.module';
import { TiendaEntity } from './tienda/tienda.entity';
import { CafeEntity } from './cafe/cafe.entity';
import { CafeTiendaModule } from './cafe-tienda/cafe-tienda.module';

@Module({
  imports: [AirlineModule, AirportModule, TiendaModule, CafeModule, CafeTiendaModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'airports',
      entities: [AirlineEntity, AirportEntity, TiendaEntity, CafeEntity],
      dropSchema: true,
      synchronize: true,
      keepConnectionAlive: true
    }), AirlineAirportModule, CafeModule,],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
