import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PostModule } from "./post/post.module";
import * as Joi from "@hapi/joi";
import DatabaseModule from "./database/database.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
      }),
    }),
    DatabaseModule,
    PostModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
