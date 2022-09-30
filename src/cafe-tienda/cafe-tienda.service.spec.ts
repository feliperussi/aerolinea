import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { CafeTiendaService } from './cafe-tienda.service';

describe('CafeTiendaService', () => {
  let service: CafeTiendaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers: [CafeTiendaService],
    }).compile();

    service = module.get<CafeTiendaService>(CafeTiendaService);
    
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
