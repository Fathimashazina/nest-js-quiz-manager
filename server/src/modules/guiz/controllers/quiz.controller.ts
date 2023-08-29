import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizService } from '../services/quiz.service';
import { Quiz } from '../entities/quiz.entity';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
// import { QuizService } from './quiz.service';
// import { CreateQuizDto } from './dto/CreateQuiz.dto';
// import { Quiz } from './quiz.entity';

@Controller('quiz') // any url which stated with 'quiz'
export class QuizController {

  constructor(private quizServece: QuizService) {}

  @Get('/')
  async getAllQuiz():Promise<Quiz[]> {
    return await this.quizServece.getAllQuiz();
  }

  @Get('/:id')
  async getQuizById(@Param('id',ParseIntPipe) id:number):Promise<Quiz>{
    return await this.quizServece.getQuizById(id);
  }

  @Post('/create')
  @HttpCode(200) //OK
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData:CreateQuizDto){
    return await this.quizServece.createNewQuiz(quizData)
  }
}
