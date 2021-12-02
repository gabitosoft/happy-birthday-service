import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FamilyDto } from './dto';
import { FamilyService } from './family.service';

@ApiTags('Families')
@Controller('family')
export class FamilyController {

  constructor(private readonly familyService: FamilyService) {}

  @Get()
  async getFamilies() {
    return await this.familyService.getFamilies();
  }

  @Get(':id')
  async getFamily(@Param('id', ParseIntPipe) id: number) {
    return await this.familyService.getFamily(id);
  }

  @Post()
  async createFamily(@Body() dto: FamilyDto) {
    return await this.familyService.createFamily(dto);
  }

  @Put(':id')
  async updateFamily(@Param('id', ParseIntPipe) id: number, @Body() dto: FamilyDto) {
    return await this.familyService.updateFamily(id, dto);
  }

  @Delete(':id')
  async deleteFamily(@Param('id', ParseIntPipe) id: number) {
    return await this.familyService.deleteFamily(id);
  }
}
