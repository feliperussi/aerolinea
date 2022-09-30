import {IsISO8601, IsNotEmpty, IsString, IsUrl, Length} from 'class-validator';

export class AirlineDto {

    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsNotEmpty()
    @IsString()
    @IsUrl()
    url_website: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsISO8601({ strict: true })
    @Length(10, 10)
    @IsNotEmpty()
    date_foundation: Date;

}
