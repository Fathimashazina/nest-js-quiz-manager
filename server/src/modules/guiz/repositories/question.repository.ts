import { Repository } from 'typeorm';
import { Question } from '../entities/question.entity';

// @EntityRepository(Quiz)
export class QuestionRepository extends Repository<Question> {}
