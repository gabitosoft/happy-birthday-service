import { IsNotEmpty, IsString } from "class-validator";

export class FamilyDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}