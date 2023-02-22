import {
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Entity,
} from "typeorm";

@Entity()
export class Post {
  @PrimaryGeneratedColumn("identity", {
    generatedIdentity: "ALWAYS",
  })
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @CreateDateColumn()
  createdAt: Date;
}
