import { Global, Module } from '@nestjs/common';
import { MessageBrokerService } from 'src/common/application/services/message-broker/message-broker.service';
import { ConfigModule } from '@nestjs/config';

@Global()
@Module({
  providers: [MessageBrokerService],
  exports: [MessageBrokerService],
  imports: [ConfigModule],
})
export class BrokerModule {}
