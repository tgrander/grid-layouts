import { users } from "@/data/users";
import type { User } from "@/types/user";
import html from "noop-tag";

type UserWithoutImage = Omit<User, "image">;

export class ChatService {
  selectedUserChat: UserWithoutImage;
  header!: HTMLElement;

  constructor(userId?: number) {
    let user;
    if (userId) user = users.find((user) => user.id === userId);

    this.selectedUserChat = user ? user : users[0];
    this.initUI();
  }

  private initUI() {
    const header = document.getElementById("header") as HTMLElement;
    this.header = header;
    this.handleSelectChat();
  }

  private handleSelectChat() {
    this.header.innerHTML = "";
    this.header.innerHTML = html`
      <div class="wrapper">
        <div class="user-avatar">
          <img
            src="${this.selectedUserChat.imagePath}"
            alt="User Avatar"
            width="60"
            height="60"
            decoding="async"
            loading="lazy"
          />
        </div>
        <div class="title">
          <span>${this.selectedUserChat.name}</span>
          <span>${this.selectedUserChat.title}</span>
        </div>
      </div>
    `;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.chatService = new ChatService();
});
