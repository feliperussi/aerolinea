import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { CafeEntity } from './cafe.entity';
import { CafeService } from './cafe.service';

describe('CafeService', () => {
  let service: CafeService;
  let repository: Repository<CafeEntity>;
  let cafesList: CafeEntity[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CafeService],
    }).compile();

    service = module.get<CafeService>(CafeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
