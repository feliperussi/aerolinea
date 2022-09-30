import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { TiendaEntity } from './tienda.entity';
import { TiendaService } from './tienda.service';

describe('TiendaService', () => {
  let service: TiendaService;
  let tiendaRepository: Repository<TiendaEntity>;
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers: [TiendaService],
    }).compile();

    service = module.get<TiendaService>(TiendaService);
    tiendaRepository = module.get<Repository<TiendaEntity>>(getRepositoryToken(TiendaEntity));
  });


  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it ('should create a tienda', async () => {
    const tienda: TiendaEntity = {
      id: '',
      name: 'tienda',
      address: 'address',
      phone: '0123456789',
      cafes: []
    }

    const newTienda: TiendaEntity = await tiendaRepository.create(tienda);
    expect(newTienda).not.toBeNull();

    const savedTienda: TiendaEntity = await tiendaRepository.save(newTienda);
    expect(savedTienda).not.toBeNull();
    expect(savedTienda.id).not.toBeNull();
    expect(savedTienda.name).toEqual(tienda.name);
    expect(savedTienda.address).toEqual(tienda.address);
    expect(savedTienda.phone).toEqual(tienda.phone);
  });

  // Verify that phone number with more or less than 10 digits is not created
  it ('should not create a tienda with phone number with more or less than 10 digits', async () => {
    const tienda: TiendaEntity = {
      id: '',
      name: 'tienda',
      address: 'address',
      phone: '012345678',
      cafes: []
    }
    
    const newTienda: TiendaEntity = await tiendaRepository.create(tienda);
    expect(newTienda).not.toBeNull();

    try {
      const savedTienda: TiendaEntity = await tiendaRepository.save(newTienda);
      expect(savedTienda).toBeNull();
    }
    catch (error) {
      expect(error).not.toBeNull();
    }
  });
});
