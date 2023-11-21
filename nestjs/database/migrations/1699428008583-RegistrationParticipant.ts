import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class RegistrationParticipant1699428008583
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'registration_participant',
        columns: [
          {
            name: 'registration_participant_id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
            default: 'gen_random_uuid()',
          },
          {
            name: 'registration_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'student_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        uniques: [
          {
            name: 'UNIQUE_REGISTRATION_STUDENT',
            columnNames: ['registration_id', 'student_id'],
          },
        ],
        foreignKeys: [
          {
            name: 'FK_REGISTRATION',
            columnNames: ['registration_id'],
            referencedTableName: 'registration',
            referencedColumnNames: ['registration_id'],
          },
          {
            name: 'FK_STUDENT',
            columnNames: ['student_id'],
            referencedTableName: 'participant',
            referencedColumnNames: ['participant_id'],
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('registration_participant');
  }
}
