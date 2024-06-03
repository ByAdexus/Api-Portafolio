import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProjectsDetailDto } from './dto/create-projects-detail.dto';
import { UpdateProjectsDetailDto } from './dto/update-projects-detail.dto';
import { ProjectsDetail, ProjectsDetailDocument } from './schemas/projects-detail.schema';

@Injectable()
export class ProjectsDetailsService {
  constructor(
    @InjectModel(ProjectsDetail.name) private projectsDetailModel: Model<ProjectsDetailDocument>,
  ) {}

  async create(createProjectsDetailDto: CreateProjectsDetailDto): Promise<ProjectsDetail> {
    const createdProject = new this.projectsDetailModel(createProjectsDetailDto);
    return createdProject.save();
  }

  async findAll(): Promise<ProjectsDetail[]> {
    const projects = await this.projectsDetailModel.find().exec();
    console.log(projects);  // Agrega este console.log para verificar los datos
    return projects;
  }
  }

  async findOne(id: string): Promise<ProjectsDetail> {
    return this.projectsDetailModel.findById(id).exec();
  }

  async update(id: string, updateProjectsDetailDto: UpdateProjectsDetailDto): Promise<ProjectsDetail> {
    return this.projectsDetailModel.findByIdAndUpdate(id, updateProjectsDetailDto, { new: true }).exec();
  }

  async remove(id: string): Promise<any> {
    return this.projectsDetailModel.findByIdAndRemove(id).exec();
  }
}
