import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsDetailsService } from './projects-details.service';

describe('ProjectsDetailsService', () => {
  let service: ProjectsDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectsDetailsService],
    }).compile();

    service = module.get<ProjectsDetailsService>(ProjectsDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
