import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar')
  parentFirstName: string;

  @Column('varchar')
  parentLastName: string;

  @Column('varchar')
  parentPhoneNumber: string;

  @Column('varchar')
  parentEmail: string;

  @Column('varchar')
  address: string;

  @Column('varchar')
  city: string;

  @Column('varchar')
  zipCode: string;

  @Column('varchar')
  student1FirstName: string;

  @Column('int')
  student1Age: number;

  @Column('date')
  student1BirthDate: Date;

  @Column('varchar', { nullable: true })
  student1PhoneNumber: string;

  @Column('varchar')
  student1Email: string;

  @Column('jsonb')
  student1ParticipateType: string[];

  @Column('varchar', { nullable: true })
  student2FirstName: string;

  @Column('int', { nullable: true })
  student2Age: number;

  @Column('date', { nullable: true })
  student2BirthDate: Date;

  @Column('varchar', { nullable: true })
  student2PhoneNumber: string;

  @Column('varchar', { nullable: true })
  student2Email: string;

  @Column('jsonb', { nullable: true })
  student2ParticipateType: string[];

  @Column('varchar', { nullable: true })
  student3FirstName: string;

  @Column('int', { nullable: true })
  student3Age: number;

  @Column('date', { nullable: true })
  student3BirthDate: Date;

  @Column('varchar', { nullable: true })
  student3PhoneNumber: string;

  @Column('varchar', { nullable: true })
  student3Email: string;

  @Column('jsonb', { nullable: true })
  student3ParticipateType: string[];

  @Column('varchar', { nullable: true })
  student4FirstName: string;

  @Column('int', { nullable: true })
  student4Age: number;

  @Column('date', { nullable: true })
  student4BirthDate: Date;

  @Column('varchar', { nullable: true })
  student4PhoneNumber: string;

  @Column('varchar', { nullable: true })
  student4Email: string;

  @Column('jsonb', { nullable: true })
  student4ParticipateType: string[];

  @Column('varchar', { nullable: true })
  student5FirstName: string;

  @Column('int', { nullable: true })
  student5Age: number;

  @Column('date', { nullable: true })
  student5BirthDate: Date;

  @Column('varchar', { nullable: true })
  student5PhoneNumber: string;

  @Column('varchar', { nullable: true })
  student5Email: string;

  @Column('jsonb', { nullable: true })
  student5ParticipateType: string[];

  @Column('varchar')
  homeChurch: string;

  @Column('varchar')
  student1Signature: string;

  @Column('varchar', { nullable: true })
  student2Signature: string;

  @Column('varchar', { nullable: true })
  student3Signature: string;

  @Column('varchar', { nullable: true })
  student4Signature: string;

  @Column('varchar', { nullable: true })
  student5Signature: string;

  @Column('varchar')
  parentSignature: string;

  @Column('date')
  signDate: Date;

  @Column('varchar')
  payPlan: string;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;
}
