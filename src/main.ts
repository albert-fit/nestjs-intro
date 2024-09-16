import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  //swagger configuration
  const config = new DocumentBuilder()
    .setTitle('NestJS Blog API')
    .setDescription('Use the base api url as http://localhost:3000/')
    .setTermsOfService('http://localhost:3000/terms')
    .setLicense('MIT', 'http://localhost:3000/license')
    .addServer('http://localhost:3000')
    .setBasePath('api')
    .setVersion('1.0')
    .build();

  //Instantiate Document
  const document = SwaggerModule.createDocument(app, config);

  // First argument is the path to the documentation.

  // The second argument is the application itself

  // Finally the document object created on the previous line
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
