import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./Client";

export enum TransactionType{
    DEPOSIT = "deposit",
    WITHDRAW = "withdraw"
}

@Entity()
export class Transaction{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type:"enum",
        enum:TransactionType
    })
    type:string

    @Column({
        type:"numeric"
    })
    amount: number

    @ManyToOne(
        ()=>Client,
        client => client.transactions
    )
    @JoinColumn({
        name: "client_id"
    })
    client:Client
}