import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/CreateQuiz.dto';

@Controller('quiz') // any url which stated with 'quiz'
export class QuizController {

  constructor(private quizServece: QuizService) {}

  @Get('/')
  getAllQuiz() {
    return this.quizServece.getAllQuiz();
  }

  @Post('/create')
  @HttpCode(200) //OK
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData:CreateQuizDto){
    return await this.quizServece.createNewQuiz(quizData)
  }
}
