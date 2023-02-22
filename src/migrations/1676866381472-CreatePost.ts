import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePost1676866381472 implements MigrationInterface {
  name = "CreatePost1676866381472";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "post" ("id" integer GENERATED ALWAYS AS IDENTITY NOT NULL, "title" character varying NOT NULL, "content" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "post"`);
  }
}
