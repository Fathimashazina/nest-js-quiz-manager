import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/guiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormconfig } from './config/typeorm.config';
// import { QuizController } from './modules/guiz/quiz.controller';

@Module({
  imports: [QuizModule,TypeOrmModule.forRoot(typeormconfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
