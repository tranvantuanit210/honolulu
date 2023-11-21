import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Index,
} from 'typeorm';
import { RegistrationTable } from './registration.table';
import { RegistrationParticipantTable } from './registration-participant.table';

@Entity('participant')
@Index('idx_participant_id', ['id'])
export class ParticipantTable {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  phoneNumber: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  zipCode: string;

  @Column({ nullable: true })
  birthDate: Date;

  @Column()
  signature: string;

  @Column()
  participateAs: string;

  @Column({ nullable: true })
  participateType: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => RegistrationTable, (registration) => registration.parent)
  registrations: RegistrationTable[];

  @OneToMany(
    () => RegistrationParticipantTable,
    (participant) => participant.student,
  )
  registrationParticipants: RegistrationParticipantTable[];
}
