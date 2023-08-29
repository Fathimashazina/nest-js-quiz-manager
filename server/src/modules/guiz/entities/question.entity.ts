import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Quiz } from './quiz.entity';
import { Option } from './option.entity';

@Entity('qusetion')
export class Question extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'The question unique identifier',
  })
  id: number;

  @Column({ type: 'varchar' })
  question: string;

  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  quiz: Quiz;

  @OneToMany(()=>Option,(option)=>option.question)
  options:Option[];
}
