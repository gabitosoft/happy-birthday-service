import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FamilyModule } from './family/family.module';
import { GiftModule } from './gift/gift.module';
import { ScheduleModule } from './schedule/schedule.module';
import { ThanksModule } from './thanks/thanks.module';

@Module({
  imports: [FamilyModule, GiftModule, ScheduleModule, ThanksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
