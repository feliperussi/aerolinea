import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { Repository } from 'typeorm';
import { AirlineEntity } from './airline.entity';
import { AirlineService } from './airline.service';
import { AirportEntity } from 'src/airport/airport.entity';

describe('AirlineService', () => {
  let service: AirlineService;
  let repository: Repository<AirlineEntity>;
  let airlinesList: AirlineEntity[];
  let airportsList: AirportEntity[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers: [AirlineService],
    }).compile();

    service = module.get<AirlineService>(AirlineService);
    repository = module.get<Repository<AirlineEntity>>(getRepositoryToken(AirlineEntity));

  });

  // const seedDatabase = async () => {
  //   repository.clear();
  //   airlinesList = [];
  //   airportsList = [];
  //   for (let i = 0; i < 10; i++) {
  //     const airline = new AirlineEntity();
  //     airline.name = fak
  //   }
  // }

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
