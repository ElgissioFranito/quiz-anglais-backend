import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { QuestionsModule } from './questions/questions.module';
import { ScoresModule } from './scores/scores.module';
import { ResponsesModule } from './responses/responses.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/quizendb'), UsersModule, QuestionsModule, ScoresModule, ResponsesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
