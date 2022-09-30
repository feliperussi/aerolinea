import {IsISO8601, IsNotEmpty, IsString, IsUrl, Length} from 'class-validator';

export class AirportDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    // Code of the airport of size 3
    @IsNotEmpty()
    @IsString()
    @Length(3, 3)
    code: string;

    // Country of the airport
    @IsNotEmpty()
    @IsString()
    country: string;

    // City of the airport
    @IsNotEmpty()
    @IsString()
    city: string;
}
