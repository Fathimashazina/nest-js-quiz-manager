import { ConsoleLogger, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quiz } from '../entities/quiz.entity';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz) private quizRepository: Repository<Quiz>,
  ) {}
  getAllQuiz() {
    return this.quizRepository.find();
  }

  async getQuizById(id:number):Promise<Quiz>{
    return await this.quizRepository.findOne({
      where: {id: id},
      relations: ['questions'],
    });  //findOnd
  }

  async createNewQuiz(quiz: CreateQuizDto) {
    console.log(quiz);
    return await this.quizRepository.save(quiz);
  }
}
