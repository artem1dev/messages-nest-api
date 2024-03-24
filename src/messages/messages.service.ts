import { Injectable, NotFoundException } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";
import { ListMessages } from "./dtos/list.messages";
import { PaginateOptions, paginate } from "./../pagination/paginator";

@Injectable()
export class MessagesService {
    constructor(public messagesRepo: MessagesRepository) {}

    async findOne(id: string) {
        const message = await this.messagesRepo.findOne(id);
        if (!message) {
            throw new NotFoundException("message npt found");
        }
        return message;
    }

    async findAll(filter: ListMessages,
        paginateOptions: PaginateOptions) {
        return await paginate(await this.messagesRepo.findAll(filter), paginateOptions);
    }

    create(content: string) {
        return this.messagesRepo.create(content);
    }
}
