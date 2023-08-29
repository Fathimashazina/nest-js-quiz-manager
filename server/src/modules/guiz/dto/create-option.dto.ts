import { IsNotEmpty, Length } from 'class-validator';

export class CreateOptionDto {
  @IsNotEmpty({ message: "Option shouldn't be empty" })
  @Length(2, 255)
  text: string;
  @IsNotEmpty()
  questionId: number;

  @IsNotEmpty()
  isCorrect:boolean;
}
