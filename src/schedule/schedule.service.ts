import { Injectable } from '@nestjs/common';
import { ScheduleDto } from './dto';

@Injectable()
export class ScheduleService {
  getSchedules() {}
  getSchedule(id: number) {}
  createSchedule(dto: ScheduleDto) {}
  updateSchedule(id: number, dto: ScheduleDto) {}
  deleteSchedule(id: number) {}
}
