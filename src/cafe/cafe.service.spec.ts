import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { Repository } from 'typeorm';
import { CafeEntity } from './cafe.entity';
import { CafeService } from './cafe.service';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('CafeService', () => {
  let service: CafeService;
  let cafeRepository: Repository<CafeEntity>;
  let cafesList: CafeEntity[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers: [CafeService],
    }).compile();

    service = module.get<CafeService>(CafeService);
    cafeRepository = module.get<Repository<CafeEntity>>(getRepositoryToken(CafeEntity));
    await seedDatabase();
  });

  const seedDatabase = async () => {
    cafeRepository.clear();
    cafesList = [];
    for(let i = 0; i < 5; i++){
        const cafe: CafeEntity = await cafeRepository.save({
            name: `cafe${i}`,
            description: `description${i}`,
            price: i
        })
        cafesList.push(cafe);
        
    }
  }

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Add test
  it('should create a cafe', async () => {
    const cafe: CafeEntity = {
      id: '',
      name: 'cafe',
      description: 'description',
      price: 1000,
      tiendas: []
    }

    const newCafe: CafeEntity = await cafeRepository.create(cafe);
    expect(newCafe).not.toBeNull();

    const savedCafe: CafeEntity = await cafeRepository.save(newCafe);
    expect(savedCafe).not.toBeNull();
    expect(savedCafe.id).not.toBeNull();
    expect(savedCafe.name).toEqual(cafe.name);
    expect(savedCafe.description).toEqual(cafe.description);
    expect(savedCafe.price).toEqual(cafe.price);
    });

    // Verify that cafe with negative price is not created
    it('should not create a cafe with negative price', async () => {
        const cafe: CafeEntity = {
          id: '',
          name: 'cafe',
          description: 'description',
          price: -1000,
          tiendas: []
        }
    
        const newCafe: CafeEntity = await cafeRepository.create(cafe);
        expect(newCafe).not.toBeNull();
    
        try {
            const savedCafe: CafeEntity = await cafeRepository.save(newCafe);
            expect(savedCafe).toBeNull();
        } catch (error) {
            expect(error).not.toBeNull();
        }
    });
});
