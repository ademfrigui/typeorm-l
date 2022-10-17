
import { Client } from './Client';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    JoinColumn,
    ManyToOne
} from 'typeorm';


export enum TransactionTypes {
    DEPOSIT = "deposit",
    WITHDRAW = "withdraw"
}

@Entity("transactions")
export class Transaction extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "enum",
        enum: TransactionTypes
    })
    type: string

    @Column({
        type: "numeric"
    })
    amount: number

    @ManyToOne(
        () => Client,
        client => client.transactions,
        { onDelete: "CASCADE" }
    )
    @JoinColumn({
        name: "client_id"
    })
    client: Client

}