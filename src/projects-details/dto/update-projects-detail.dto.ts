import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectsDetailDto } from './create-projects-detail.dto';

export class UpdateProjectsDetailDto extends PartialType(CreateProjectsDetailDto) {}
