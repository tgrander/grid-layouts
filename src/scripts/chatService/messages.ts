import { userMessages } from "@data/messages";

export class MessageService {
  private messages: typeof userMessages;
  constructor() {
    this.messages = userMessages;
  }

  getMessages(userId: number) {
    const messages = this.messages[userId];
    if (!messages) throw new Error(`No messages for user ${userId}`);

    return messages;
  }
}
