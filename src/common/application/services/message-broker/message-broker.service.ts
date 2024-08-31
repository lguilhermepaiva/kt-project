import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { MessageBrokerEvent } from '../../ports/in/broker/broker-message.enum';

@Injectable()
export class MessageBrokerService {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  async emit<T = void>(
    event: MessageBrokerEvent,
    value: Record<string, unknown>,
    sync: boolean = false,
  ): Promise<T> {
    if (sync) {
      const response = await this.eventEmitter.emitAsync(event, value);
      if (response.length === 0) throw new Error('No handler for the event');
      return response[0];
    }
    return this.eventEmitter.emit(event, value) as T;
  }
}
