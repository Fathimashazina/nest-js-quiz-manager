import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty({ message: "Question shouldn't be empty" })
  @Length(3, 255, {
    message: 'Title must be longer than or equal to 3 characters',
  })
  question: string;
  @IsNotEmpty()
  quizId: number;
}
