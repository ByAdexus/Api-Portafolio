import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsDetailsService } from './projects-details.service';
import { ProjectsDetailsController } from './projects-details.controller';
import { ProjectsDetail, ProjectsDetailSchema } from './schemas/projects-detail.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ProjectsDetail.name, schema: ProjectsDetailSchema }], 'cats')
  ],
  controllers: [ProjectsDetailsController],
  providers: [ProjectsDetailsService],
})
export class ProjectsDetailsModule {}
