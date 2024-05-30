import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsDetailsController } from './projects-details.controller';
import { ProjectsDetailsService } from './projects-details.service';

describe('ProjectsDetailsController', () => {
  let controller: ProjectsDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectsDetailsController],
      providers: [ProjectsDetailsService],
    }).compile();

    controller = module.get<ProjectsDetailsController>(ProjectsDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
