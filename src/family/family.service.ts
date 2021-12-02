import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FamilyDto } from './dto';
import { Family } from './entities/familiy.entity';

@Injectable()
export class FamilyService {

  constructor(
    @InjectRepository(Family)
    private readonly familyRepository: Repository<Family>
  ) {}

  async getFamilies() : Promise<Family[]>{
    return await this.familyRepository.find();
  }

  async getFamily(id: number) {
    const family = await this.familyRepository.findOne(id);
    if (!family) throw new NotFoundException('Family doesn\'t exist');
    return family;
  }

  async createFamily(dto: FamilyDto) {
    const family = this.familyRepository.create(dto);
    return await this.familyRepository.save(family);
  }

  async updateFamily(id: number, dto: FamilyDto) {
    const family = await this.familyRepository.findOne(id);

    if (!family) throw new NotFoundException('Family doesn\'t exist');
    const editedFamily = Object.assign(family, dto);
    return await this.familyRepository.save(editedFamily);
  }

  async deleteFamily(id: number) {
    return await this.familyRepository.delete(id);
  }
}
