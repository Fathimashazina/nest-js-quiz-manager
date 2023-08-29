import { ConsoleLogger, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quiz } from '../entities/quiz.entity';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { Question } from '../entities/question.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz) private quizRepository: Repository<Quiz>,
  ) {}
  async getAllQuiz(): Promise<Quiz[]> {
    return await this.quizRepository
      .createQueryBuilder('q')
      .leftJoinAndSelect('q.questions','qt')
      .getMany();
      //  Promise<[Quiz[],number]>
      // .leftJoinAndSelect('qt.options','o')
      // .take(1) // show one quiz at a time
      // .getManyAndCount(); // number of total quiz
      
  }

  async getQuizById(id: number): Promise<Quiz> {
    return await this.quizRepository.findOne({
      where: { id: id },
      relations: ['questions','questions.options'],
    }); //findOnd
  }

  async createNewQuiz(quiz: CreateQuizDto) {
    console.log(quiz);
    return await this.quizRepository.save(quiz);
  }
}
