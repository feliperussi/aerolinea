import { CafeEntity } from "../cafe/cafe.entity";
import { Column, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

export class TiendaEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    name: string;
    
    @Column()
    address: string;
    
    @Column()
    phone: string;


    @ManyToMany(type => CafeEntity, cafe => cafe.tiendas)
    @JoinTable()
    cafes: CafeEntity[];
}
