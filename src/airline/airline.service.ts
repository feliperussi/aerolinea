import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AirlineEntity } from './airline.entity';

@Injectable()
export class AirlineService {
    constructor(
        @InjectRepository(AirlineEntity)
        private readonly airlineRepository: Repository<AirlineEntity>
    ){}

    async findAll(): Promise<AirlineEntity[]> {
        return await this.airlineRepository.find();
    }

    async findOne(id: string): Promise<AirlineEntity> {
        const persistedAirline = await this.airlineRepository.findOne({where: {id}, relations: ['airports']});
        if (!persistedAirline)
            throw new Error('Airline not found');
        return await this.airlineRepository.findOne({where: {id}, relations: ['airports']});
    }

    async create(airline: AirlineEntity): Promise<AirlineEntity> {
        // Verify if date_foundation is valid (not in the future)
        if (airline.date_foundation > new Date())
            throw new Error('Date foundation is invalid');
            
        return await this.airlineRepository.save(airline);
    }

    async update(id: string, airline: AirlineEntity): Promise<AirlineEntity> {
        const persistedAirline = await this.airlineRepository.findOne({where: {id}});
        if (!persistedAirline)
            throw new Error('Airline not found');
        return await this.airlineRepository.findOne({where: {id}});
    }

    async delete(id: string) {
        const airline: AirlineEntity = await this.airlineRepository.findOne({where: {id}});
        if (!airline)
            throw new Error('Airline not found');
        await this.airlineRepository.remove(airline);
    }
    
}
