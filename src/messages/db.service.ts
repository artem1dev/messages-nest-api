import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";

@Injectable()
export class DBService {
    async getMessages(file: string) {
        const contents = await readFile(file, "utf8");
        const messages = JSON.parse(contents);
        return messages;
    }

    async writeMessages(file: string, messages) {
        await writeFile(file, JSON.stringify(messages))
    }
}
