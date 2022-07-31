import {Entity,BaseEntity,Column, CreateDateColumn, UpdateDateColumn, ManyToMany} from "typeorm";
import { Client } from "./Client";
import { Person } from "./utils/Person";

@Entity('banker')
export class Banker extends Person{
    @Column({
        unique: true,
        length:10
    })
    employee_number: string;

    @ManyToMany(
        ()=> Client
    )

    @CreateDateColumn()
    create_date: Date;

    @UpdateDateColumn()
    update_date: Date;
}