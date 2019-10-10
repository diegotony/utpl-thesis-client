import { Test } from '@nestjs/testing';
import { UsersService } from './users.service';


describe('ItemService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module= await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});