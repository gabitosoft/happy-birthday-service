import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { GiftService } from './gift.service';
import { GiftDto } from './dto/gift.dto';

@Controller('gift')
export class GiftController {
  constructor(private readonly giftService: GiftService) {}

  @Get()
  getFamilies() {
    return this.giftService.getGifts();
  }

  @Get(':id')
  getFamily(@Param('id', ParseIntPipe) id: number) {
    return this.giftService.getGift(id);
  }

  @Post()
  createFamily(@Body() dto: GiftDto) {
    return this.giftService.createGift(dto);
  }

  @Put(':id')
  updateFamily(@Param('id', ParseIntPipe) id: number, @Body() dto: GiftDto) {
    return this.giftService.updateGift(id, dto);
  }

  @Delete(':id')
  deleteFamily(@Param('id', ParseIntPipe) id: number) {
    return this.giftService.deleteGift(id);
  }
}
