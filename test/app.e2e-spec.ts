import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { INestApplication } from '@nestjs/common';

describe('Users', () => {
  let app: INestApplication;
  let usersService = { findAll(): () => ['test'] };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UsersModule],
    })
      .overrideProvider(UsersService)
      .useValue(usersService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/GET users', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect({
        data: usersService.findAll()
      });
  });
  afterAll(async () => {
    await app.close();
  });

});
