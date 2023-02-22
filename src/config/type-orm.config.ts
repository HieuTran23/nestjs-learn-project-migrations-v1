import { ConfigService } from "@nestjs/config";
import { config } from "dotenv";
import { Post } from "../post/entities/post.entity";
import { DataSource } from "typeorm";
import { CreatePost1676866381472 } from "../migrations/1676866381472-CreatePost";

config();

const configService = new ConfigService();

console.log(configService.get("POSTGRES_HOST"));

export default new DataSource({
  type: "postgres",
  host: configService.get("POSTGRES_HOST"),
  port: configService.get("POSTGRES_PORT"),
  username: configService.get("POSTGRES_USER"),
  password: configService.get("POSTGRES_PASSWORD"),
  database: configService.get("POSTGRES_DB"),
  entities: [Post],
  migrations: [CreatePost1676866381472],
});
