import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class User1698912994534 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'parentFirstName',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'parentLastName',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'parentPhoneNumber',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'parentEmail',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'address',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'city',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'zipCode',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'student1FirstName',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'student1Age',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'student1BirthDate',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'student1PhoneNumber',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'student1Email',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'student1ParticipateType',
            type: 'jsonb',
            isNullable: false,
          },
          {
            name: 'student2FirstName',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'student2Age',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'student2BirthDate',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'student2PhoneNumber',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'student2Email',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'student2ParticipateType',
            type: 'jsonb',
            isNullable: true,
          },
          {
            name: 'student3FirstName',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'student3Age',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'student3BirthDate',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'student3PhoneNumber',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'student3Email',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'student3ParticipateType',
            type: 'jsonb',
            isNullable: true,
          },
          {
            name: 'student4FirstName',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'student4Age',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'student4BirthDate',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'student4PhoneNumber',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'student4Email',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'student4ParticipateType',
            type: 'jsonb',
            isNullable: true,
          },
          {
            name: 'student5FirstName',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'student5Age',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'student5BirthDate',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'student5PhoneNumber',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'student5Email',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'student5ParticipateType',
            type: 'jsonb',
            isNullable: true,
          },
          {
            name: 'homeChurch',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'student1Signature',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'student2Signature',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'student3Signature',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'student4Signature',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'student5Signature',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'parentSignature',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'signDate',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'payPlan',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
