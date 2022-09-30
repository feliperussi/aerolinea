import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { AirlineDto } from './airline.dto';
import { AirlineEntity } from './airline.entity';
import { AirlineService } from './airline.service';

@Controller('airlines')
export class AirlineController {
    constructor(private readonly airlineService: AirlineService){}

    @Get()
    async findAll(): Promise<AirlineEntity[]> {
        return await this.airlineService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<AirlineEntity> {
        return await this.airlineService.findOne(id);
    }

    @Post()
    async create(@Body() airlineDto: AirlineDto) {
        const airline: AirlineEntity = plainToInstance(AirlineEntity, airlineDto);
        return await this.airlineService.create(airline);
      }

    @Put(':id')
    async update(@Param('id') id: string, @Body() airlineDto: AirlineDto) {
        const airline: AirlineEntity = plainToInstance(AirlineEntity, airlineDto);
        return await this.airlineService.update(id, airline);
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string) {
        return await this.airlineService.delete(id);
    }

}
