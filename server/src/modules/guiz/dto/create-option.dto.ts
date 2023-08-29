import { IsNotEmpty, Length } from 'class-validator';

export class CreateOptionDto {
  @IsNotEmpty({ message: "Question shouldn't be empty" })
  @Length(3, 255)
  text: string;
  @IsNotEmpty()
  questionId: number;

  @IsNotEmpty()
  isCorrect:boolean;
}
