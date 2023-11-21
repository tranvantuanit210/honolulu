import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';
import { RegistrationTable } from './registration.table';
import { ParticipantTable } from './participant.table';

@Entity('registration_participant')
@Index('idx_registration_participants_registration_id', ['registrationId'])
@Index('idx_registration_participants_student_id', ['studentId'])
export class RegistrationParticipantTable {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(
    () => RegistrationTable,
    (registration) => registration.participants,
  )
  @JoinColumn({ name: 'registration_id' })
  registration: RegistrationTable;

  @Column()
  registrationId: string;

  @ManyToOne(
    () => ParticipantTable,
    (participant) => participant.registrationParticipants,
  )
  @JoinColumn({ name: 'student_id' })
  student: ParticipantTable;

  @Column()
  studentId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
