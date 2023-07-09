import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = 8000;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, 'localhost', () => {
    console.log('Server listen on port', PORT);
  });
}
bootstrap();
