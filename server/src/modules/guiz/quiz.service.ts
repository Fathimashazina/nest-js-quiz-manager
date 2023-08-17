import { ConsoleLogger, Injectable } from "@nestjs/common";
import { QuizRepository } from "./quiz.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuizDto } from "./dto/CreateQuiz.dto";


@Injectable()
export class QuizService{
    constructor(
        @InjectRepository(QuizRepository) private quizRepository: QuizRepository,
    ){}
    getAllQuiz(){
        return [1,2,3,4,5]
    }

    async createNewQuiz(quiz:CreateQuizDto){
        console.log(quiz);
        return await this.quizRepository.save(quiz);
    }
}