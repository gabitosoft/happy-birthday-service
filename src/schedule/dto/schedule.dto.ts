import { IsNotEmpty, IsString } from "class-validator";

export class ScheduleDto {
  @IsNotEmpty()
  @IsString()
  time: string;
  isBusy: boolean;
}
