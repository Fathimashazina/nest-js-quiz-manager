import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/guiz/quiz.module';
// import { QuizController } from './modules/guiz/quiz.controller';

@Module({
  imports: [QuizModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
