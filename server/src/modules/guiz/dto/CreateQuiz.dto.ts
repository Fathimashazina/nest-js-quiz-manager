import { IsNotEmpty, Length } from "class-validator";

export class CreateQuizDto{

    @IsNotEmpty({message:'Title shouldn\'t be empty'})
    @Length(3,255,{message:'Title must be longer than or equal to 3 characters'})
    title:string;

    @IsNotEmpty({message:'Description shouldn\'t be empty'})
    @Length(3)
    description:string;
    
}