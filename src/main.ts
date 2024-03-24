import { ValidationPipe } from "@nestjs/common";
import { MessagesModule } from "./messages/messages.module";
import { NestFactory } from "@nestjs/core";

async function bootstrap() {
    const app = await NestFactory.create(MessagesModule);
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
