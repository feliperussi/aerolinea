import { AirlineEntity } from "../airline/airline.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AirportEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    code: string;
    
    @Column()
    name: string;

    @Column()
    country: string;

    @Column()
    city: string;
    
    @ManyToMany(type => AirlineEntity, airline => airline.airports)
    airlines: AirlineEntity[];

    
}
