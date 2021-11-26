import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { FamilyDto } from './dto';
import { FamilyService } from './family.service';

@Controller('family')
export class FamilyController {

  constructor(private readonly familyService: FamilyService) {}

  @Get()
  getFamilies() {
    return this.familyService.getFamilies();
  }

  @Get(':id')
  getFamily(@Param('id', ParseIntPipe) id: number) {
    return this.familyService.getFamily(id);
  }

  @Post()
  createFamily(@Body() dto: FamilyDto) {
    return this.familyService.createFamily(dto);
  }

  @Put(':id')
  updateFamily(@Param('id', ParseIntPipe) id: number, @Body() dto: FamilyDto) {
    return this.familyService.updateFamily(id, dto);
  }

  @Delete(':id')
  deleteFamily(@Param('id', ParseIntPipe) id: number) {
    return this.familyService.deleteFamily(id);
  }
}
