import { CafeEntity } from "../cafe/cafe.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
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
