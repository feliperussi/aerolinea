import { AirportEntity } from '../airport/airport.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AirlineEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    name: string;
    
    @Column()
    description: string;
    
    @Column()
    date_foundation: Date;

    @Column()
    url_website: string;

    @ManyToMany(type => AirportEntity, airport => airport.airlines)
    @JoinTable()
    airports: AirportEntity[];
    
}
