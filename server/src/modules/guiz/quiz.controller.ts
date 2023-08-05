import { Controller, Get } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('quiz') // any url which stated with 'quiz'
export class QuizController {

  constructor(private quizServece: QuizService) {}

  @Get('/')
  getAllQuiz() {
    return this.quizServece.getAllQuiz();
  }
}
