import { Injectable } from '@nestjs/common';
import { GiftDto } from './dto';

@Injectable()
export class GiftService {
  getGifts() {}
  getGift(id: number) {}
  createGift(dto: GiftDto) {}
  updateGift(id: number, dto: GiftDto) {}
  deleteGift(id: number) {}
}
