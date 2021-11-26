import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleDto } from './dto';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get()
  getFamilies() {
    return this.scheduleService.getSchedules();
  }

  @Get(':id')
  getFamily(@Param('id', ParseIntPipe) id: number) {
    return this.scheduleService.getSchedule(id);
  }

  @Post()
  createFamily(@Body() dto: ScheduleDto) {
    return this.scheduleService.createSchedule(dto);
  }

  @Put(':id')
  updateFamily(@Param('id', ParseIntPipe) id: number, @Body() dto: ScheduleDto) {
    return this.scheduleService.updateSchedule(id, dto);
  }

  @Delete(':id')
  deleteFamily(@Param('id', ParseIntPipe) id: number) {
    return this.scheduleService.deleteSchedule(id);
  }
}
