import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Tenant {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    session_id: string
}