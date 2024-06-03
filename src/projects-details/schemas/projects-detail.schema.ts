import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProjectsDetailDocument = ProjectsDetail & Document;

@Schema()
export class ProjectsDetail {
  @Prop({ required: true })
  name: string;

  @Prop()
  image: string;

  @Prop()
  description: string;

  @Prop([String])
  technologies: string[];

  @Prop()
  html_url: string;
}

export const ProjectsDetailSchema = SchemaFactory.createForClass(ProjectsDetail);
