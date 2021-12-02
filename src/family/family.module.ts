import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Family } from './entities/familiy.entity';
import { FamilyController } from './family.controller';
import { FamilyService } from './family.service';

@Module({
  imports: [TypeOrmModule.forFeature([Family])],
  controllers: [FamilyController],
  providers: [FamilyService]
})
export class FamilyModule {}
