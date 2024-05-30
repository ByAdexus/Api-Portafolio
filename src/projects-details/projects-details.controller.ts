import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectsDetailsService } from './projects-details.service';
import { CreateProjectsDetailDto } from './dto/create-projects-detail.dto';
import { UpdateProjectsDetailDto } from './dto/update-projects-detail.dto';

@Controller('projects-details')
export class ProjectsDetailsController {
  constructor(private readonly projectsDetailsService: ProjectsDetailsService) {}

  @Post()
  create(@Body() createProjectsDetailDto: CreateProjectsDetailDto) {
    return this.projectsDetailsService.create(createProjectsDetailDto);
  }

  @Get()
  findAll() {
    return this.projectsDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectsDetailDto: UpdateProjectsDetailDto) {
    return this.projectsDetailsService.update(+id, updateProjectsDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectsDetailsService.remove(+id);
  }
}
