import { Injectable } from '@nestjs/common';
import { CreateProjectsDetailDto } from './dto/create-projects-detail.dto';
import { UpdateProjectsDetailDto } from './dto/update-projects-detail.dto';

@Injectable()
export class ProjectsDetailsService {
  create(createProjectsDetailDto: CreateProjectsDetailDto) {
    return 'This action adds a new projectsDetail';
  }

  findAll() {
    return `This action returns all projectsDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectsDetail`;
  }

  update(id: number, updateProjectsDetailDto: UpdateProjectsDetailDto) {
    return `This action updates a #${id} projectsDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectsDetail`;
  }
}
