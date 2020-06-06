import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './common/database/database.module';
import { AuthModule } from './common/auth/auth.module';
import {GraphQLModule} from "@nestjs/graphql";
import {join} from 'path';

@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'schema.graphql'),
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts')
      },
      cors: {
        credentials: true,
        origin: true,
      }
    }),
    AuthModule
  ],
  controllers: [AppController]
})
export class AppModule {}
