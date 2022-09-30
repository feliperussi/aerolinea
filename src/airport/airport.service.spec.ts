import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { Repository } from 'typeorm';
import { AirportEntity } from './airport.entity';
import { AirportService } from './airport.service';

describe('AirportService', () => {
  let service: AirportService;
  let repository: Repository<AirportEntity>;
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers: [AirportService],
    }).compile();

    service = module.get<AirportService>(AirportService);
    repository = module.get<Repository<AirportEntity>>(getRepositoryToken(AirportEntity));
    
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
