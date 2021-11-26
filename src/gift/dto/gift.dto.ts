import { IsNotEmpty, IsString } from "class-validator";

export class GiftDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  description: string;
}
