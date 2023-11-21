import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Registration1699427967555 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'registration',
        columns: [
          {
            name: 'registration_id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
            default: 'gen_random_uuid()',
          },
          {
            name: 'parent_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'pay_plan',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'sign_date',
            type: 'date',
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
        foreignKeys: [
          {
            name: 'FK_REGISTRATION_PARENT',
            columnNames: ['parent_id'],
            referencedTableName: 'participant',
            referencedColumnNames: ['participant_id'],
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('registration');
  }
}
