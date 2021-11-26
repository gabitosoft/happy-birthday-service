import { Injectable } from '@nestjs/common';
import { FamilyDto } from './dto';

@Injectable()
export class FamilyService {
  getFamilies() {}
  getFamily(id: number) {}
  createFamily(dto: FamilyDto) {}
  updateFamily(id: number, dto: FamilyDto) {}
  deleteFamily(id: number) {}
}
