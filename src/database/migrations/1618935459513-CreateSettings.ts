import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSettings1618935459513 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "settings",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "username",
            type: "varchar",
          },
          {
            name: "chat",
            type: "boolean",
            default: true,
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "new()",
          },
          {
            name: "create_at",
            type: "timestamp",
            default: "new()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("settings");
  }
}
