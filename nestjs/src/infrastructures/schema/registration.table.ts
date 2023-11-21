import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Index,
} from 'typeorm';
import { ParticipantTable } from './participant.table';
import { RegistrationParticipantTable } from './registration-participant.table';

@Entity('registration')
@Index('idx_registration_id', ['id'])
export class RegistrationTable {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  payPlan: string;

  @Column()
  homeChurch: string;

  @Column()
  signDate: Date;

  @ManyToOne(() => ParticipantTable)
  @JoinColumn({ name: 'parent_id' })
  parent: ParticipantTable;

  @Column()
  parentId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(
    () => RegistrationParticipantTable,
    (participant) => participant.registration,
  )
  participants: RegistrationParticipantTable[];
}
