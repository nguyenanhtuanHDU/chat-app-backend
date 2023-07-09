import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(8000, {
  cors: true,
  origin: ['http://localhost:4200'],
  credentials: true,
  transports: ['polling', 'websocket'],
})
export class ChatGateWay {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  async handleMessage(
    @MessageBody() message: string,
    @ConnectedSocket() client: Socket,
  ) {
    console.log(`🚀 ~ client:`, client.id, message);
    this.server.emit('message', message);
  }
}
