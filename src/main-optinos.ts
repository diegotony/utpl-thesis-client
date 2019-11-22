import { NestMicroserviceOptions } from '@nestjs/common/interfaces/microservices/nest-microservice-options.interface';
import { MicroserviceOptions } from '@nestjs/common/interfaces/microservices/microservice-configuration.interface';
import { Transport } from '@nestjs/common/enums/transport.enum';

export const OPTIONS: NestMicroserviceOptions & MicroserviceOptions = {
  transport: Transport.REDIS,
  options: {
    url: 'redis://localhost:6379',
  },
}; 