import { TiendaEntity } from "../tienda/tienda.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CafeEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    name: string;
    
    @Column()
    description: string;
    
    @Column()
    price: number;

    @ManyToMany(type => TiendaEntity, tienda => tienda.cafes)
    tiendas: TiendaEntity[];
}