import {Entity,BaseEntity,Column,CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany} from "typeorm";
import { Banker } from "./Banker";
import { Transaction } from "./Transaction";
import { Person } from "./utils/Person"

@Entity('client')
export class Client extends Person{

    @Column({
        type:"numeric"
    })
    balance: number;

    @Column({
        default: true,
        name:'active'
    })
    is_active: boolean;

    @Column({
        type:'simple-json',
        nullable:true
    })
    additional_info:{
        age: number,
        hair_color: string
    }

    @Column({
        type: "simple-array",
        default: []
    })
    family_members: string[];

    @OneToMany(
        ()=>Transaction,
        transaction => transaction.client
    )
    transactions:Transaction;

    @ManyToMany(
        ()=>Banker
    )
    bankers:Banker

    @CreateDateColumn()
    create_date: Date;

    @UpdateDateColumn()
    update_date: Date;
}