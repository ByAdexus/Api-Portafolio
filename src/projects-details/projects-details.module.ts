import { Module } from '@nestjs/common';
import { ProjectsDetailsService } from './projects-details.service';
import { ProjectsDetailsController } from './projects-details.controller';

@Module({
  controllers: [ProjectsDetailsController],
  providers: [ProjectsDetailsService],
})
export class ProjectsDetailsModule {}
