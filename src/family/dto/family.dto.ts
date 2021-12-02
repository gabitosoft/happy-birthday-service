import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class FamilyDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;
}