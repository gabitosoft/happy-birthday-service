import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FamilyModule } from './family/family.module';
import { GiftModule } from './gift/gift.module';
import { ScheduleModule } from './schedule/schedule.module';
import { ThanksModule } from './thanks/thanks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'happy-birthday',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true
    }),
    FamilyModule, GiftModule, ScheduleModule, ThanksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
