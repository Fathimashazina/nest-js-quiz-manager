import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/guiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './config/typeorm.config';
// import { typeOrmConfigAsync } from './config/typeorm.config';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [QuizModule,
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
