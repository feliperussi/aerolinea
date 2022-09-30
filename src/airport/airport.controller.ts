import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { AirportEntity } from './airport.entity';
import { AirportService } from './airport.service';
import { plainToInstance } from 'class-transformer';
import { AirportDto } from './airport.dto';
import { BusinessErrorsInterceptor } from 'src/shared/errors/business-errors.interceptor';

@Controller('airports')
@UseInterceptors(BusinessErrorsInterceptor)
export class AirportController {
    constructor(private readonly airportService: AirportService){}

    @Get()
    async findAll(): Promise<AirportEntity[]> {
        return await this.airportService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<AirportEntity> {
        return await this.airportService.findOne(id);
    }

    @Post()
    async create(@Body() airportDto: AirportDto) {
        const airport: AirportEntity = plainToInstance(AirportEntity, airportDto);
        return await this.airportService.create(airport);
      }

    @Put(':id')
    async update(@Param('id') id: string, @Body() airportDto: AirportDto) {
        const airport: AirportEntity = plainToInstance(AirportEntity, airportDto);
        return await this.airportService.update(id, airport);
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string) {
        return await this.airportService.delete(id);
    }



}
