import { Module } from "@nestjs/common";
import { MessagesController } from "./messages.controller";
import { MessagesService } from "./messages.service";
import { MessagesRepository } from "./messages.repository";
import { DBService } from "./db.service";

@Module({
    controllers: [MessagesController],
    providers: [MessagesService, MessagesRepository, DBService],
})
export class MessagesModule {}
