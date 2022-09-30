import { Injectable } from '@nestjs/common';
import { AirlineEntity } from '../airline/airline.entity';
import { AirportEntity } from '../airport/airport.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AirlineAirportService {
    constructor(
        @InjectRepository(AirportEntity)
        private readonly airportRepository: Repository<AirportEntity>,
    
        @InjectRepository(AirlineEntity)
        private readonly airlineRepository: Repository<AirlineEntity>
    ){}

    async addAirportToAirline(airlineId: string, airportId: string) {
        const airline: AirlineEntity = await this.airlineRepository.findOne({where: {id: airlineId}, relations: ['airports']});
        if (!airline)
            throw new Error('Airline not found');
        const airport: AirportEntity = await this.airportRepository.findOne({where: {id: airportId}});
        if (!airport)
            throw new Error('Airport not found');
        airline.airports.push(airport);
        await this.airlineRepository.save(airline);
    }

    async findAirportsFromAirline(airlineId: string): Promise<AirportEntity[]> {
        const airline: AirlineEntity = await this.airlineRepository.findOne({where: {id: airlineId}, relations: ['airports']});
        if (!airline)
            throw new Error('Airline not found');
        return airline.airports;
    }

    async findAirportFromAirline(airlineId: string, airportId: string): Promise<AirportEntity> {
        const airline: AirlineEntity = await this.airlineRepository.findOne({where: {id: airlineId}, relations: ['airports']});
        if (!airline)
            throw new Error('Airline not found');
        const airport: AirportEntity = airline.airports.find(airport => airport.id === airportId);
        if (!airport)
            throw new Error('Airport not found');
        return airport;
    }

    async updateAirportFromAirline(airlineId: string, airportId: string, airport: AirportEntity) {
        const airline: AirlineEntity = await this.airlineRepository.findOne({where: {id: airlineId}, relations: ['airports']});
        if (!airline)
            throw new Error('Airline not found');
        const airportIndex: number = airline.airports.findIndex(airport => airport.id === airportId);
        if (airportIndex === -1)
            throw new Error('Airport not found');
        airline.airports[airportIndex] = airport;
        await this.airlineRepository.save(airline);
    }

    async deleteAirportFromAirline(airlineId: string, airportId: string) {
        const airline: AirlineEntity = await this.airlineRepository.findOne({where: {id: airlineId}, relations: ['airports']});
        if (!airline)
            throw new Error('Airline not found');
        const airportIndex: number = airline.airports.findIndex(airport => airport.id === airportId);
        if (airportIndex === -1)
            throw new Error('Airport not found');
        airline.airports.splice(airportIndex, 1);
        await this.airlineRepository.save(airline);
    }

}


