import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AirportEntity } from './airport.entity';

@Injectable()
export class AirportService {
     constructor(
       @InjectRepository(AirportEntity)
       private readonly airportRepository: Repository<AirportEntity>
   ){}

   async findAll(): Promise<AirportEntity[]> {
         return await this.airportRepository.find();
    }

    async findOne(id: string): Promise<AirportEntity> {
        const persistedAirport = await this.airportRepository.findOne({where: {id}, relations: ['airlines']});
        if (!persistedAirport)
            throw new Error('Airport not found');
        return await this.airportRepository.findOne({where: {id}, relations: ['airlines']});
    }

    async create(airport: AirportEntity): Promise<AirportEntity> {
        // Verify if code is valid (length = 3)
        if (airport.code.length != 3)
            throw new Error('Code is invalid');
        
        return await this.airportRepository.save(airport);
    }

    async update(id: string, airport: AirportEntity): Promise<AirportEntity> {
        const persistedAirport = await this.airportRepository.findOne({where: {id}});
        if (!persistedAirport)
            throw new Error('Airport not found');
        return await this.airportRepository.save({...persistedAirport, ...airport});
    }

    async delete(id: string) {
        const airport: AirportEntity = await this.airportRepository.findOne({where: {id}});
        if (!airport)
            throw new Error('Airport not found');
        await this.airportRepository.remove(airport);
    }

}
