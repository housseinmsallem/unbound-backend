import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemberModule } from './member/member.module';
import { Member } from './member/entities/member.entity';

@Module({
  imports: [
    MemberModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [Member],
      synchronize: true,
      //synchronize:false in PROD VERY IMPORTANT!!!!!!!!!!!!!!!!!
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
