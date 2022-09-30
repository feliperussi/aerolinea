import { Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { AirlineAirportService } from './airline-airport.service';

@Controller('airline-airport')
export class AirlineAirportController {
    constructor(private readonly airlineairport: AirlineAirportService){}


    @Get(':airlineId/airports')
    async findAirportsByAirline(@Param('airlineId') airlineId: string) {
        return await this.airlineairport.findAirportsFromAirline(airlineId);
    }

    @Get(':airlineId/airports/:airportId')
    async findAirportByAirline(@Param('airlineId') airlineId: string, @Param('airportId') airportId: string) {
        return await this.airlineairport.findAirportFromAirline(airlineId, airportId);
    }

    @Post(':airlineId/airports/:airportId')
    async addAirportToAirline(@Param('airlineId') airlineId: string, @Param('airportId') airportId: string) {
        return await this.airlineairport.addAirportToAirline(airlineId, airportId);
    }

    @Delete(':airlineId/airports/:airportId')
    @HttpCode(204)
    async deleteAirportFromAirline(@Param('airlineId') airlineId: string, @Param('airportId') airportId: string) {
        return await this.airlineairport.deleteAirportFromAirline(airlineId, airportId);
    }

}
