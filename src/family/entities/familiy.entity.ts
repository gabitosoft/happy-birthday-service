import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('families')
export class Family {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name!: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}