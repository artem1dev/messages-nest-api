import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { CreateMessageDto } from "./dtos/create-message.dto";
import { MessagesService } from "./messages.service";
import { ListMessages } from "./dtos/list.messages";

@Controller("messages")
export class MessagesController {
    constructor(
        public messagesService: MessagesService) {}

    @Get()
    listMessages(@Query() filter: ListMessages) {
        return this.messagesService.findAll(filter, {
            total: true,
            currentPage: filter.page,
            limit: filter.limit,
        });
    }

    @Get(":id")
    async getMessage(@Param("id") id: string) {
        return await this.messagesService.findOne(id);
    }

    @Post()
    createMessages(@Body() body: CreateMessageDto) {
        return this.messagesService.create(body.content);
    }
}
