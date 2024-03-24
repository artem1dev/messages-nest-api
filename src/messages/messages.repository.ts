import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";
import { DBService } from "./db.service";
import { ListMessages } from "./dtos/list.messages";

@Injectable()
export class MessagesRepository {
    constructor(public dbService: DBService) {}

    async findOne(id: string) {
        const messages = await this.dbService.getMessages(process.env.DB_JSON_NAME);
        return messages[id];
    }

    async findAll(filter: ListMessages) {
        const messages = await this.dbService.getMessages(process.env.DB_JSON_NAME);
        return messages.slice(filter.page * filter.limit, filter.page * filter.limit + filter.limit);
    }

    async create(content: string) {
        const messages = await this.dbService.getMessages(process.env.DB_JSON_NAME);
        const id = Math.floor(Math.random() * 999);
        messages[id] = { id, content };
        await this.dbService.writeMessages(process.env.DB_JSON_NAME, messages);
    }
}
