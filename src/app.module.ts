import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { SkillsModule } from './skills/skills.module';
import { ProjectsDetailsModule } from './projects-details/projects-details.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI, {
      connectionName: 'cats',
    }),
    SkillsModule,
    ProjectsDetailsModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
