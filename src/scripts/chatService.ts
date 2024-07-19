import { users } from "@/data/users";
import type { User } from "@/types/user";
import html from "noop-tag";
import { MessageService } from "./chatService/messages";

interface UserWithoutImage extends Omit<User, "image"> {
  element: HTMLElement;
}

const isSelected = "isSelected";

export class ChatService {
  users!: Map<number, UserWithoutImage>;
  selectedUser: UserWithoutImage | null = null;
  header: HTMLElement;
  sidebar: HTMLElement;
  messageService: MessageService;

  constructor() {
    this.header = document.getElementById("header") as HTMLElement;
    this.sidebar = document.getElementById("sidebar") as HTMLElement;
    this.messageService = new MessageService();

    this.initUsers();
    this.selectChat();

    this.sidebar.addEventListener("click", this.handleChatClick.bind(this));
  }

  private handleChatClick(event: MouseEvent) {
    event.preventDefault();
    const target = event.target as HTMLElement;
    const listItem = target.closest("li[data-id]") as HTMLLIElement | null;

    console.log("CLICKED");
    console.log("target.tagName", target.tagName);
    console.log("target.dataset.id :>> ", target.dataset.id);
    console.log("target :>> ", target);

    if (listItem) {
      const userId = parseInt(listItem.dataset.id ?? "", 10);
      if (isNaN(userId)) {
        throw new Error("Invalid user ID in `data-id` attribute.");
      }
      this.selectChat(userId);
    }
  }

  private initUsers() {
    const usersMap = new Map<number, UserWithoutImage>();

    users.forEach((user) => {
      const element = document.querySelector(
        `[data-id="${user.id}"]`
      ) as HTMLElement;

      usersMap.set(user.id, {
        ...user,
        element,
      });
    });

    this.users = usersMap;
  }

  private selectChat(userId?: number) {
    const id = userId ?? (this.users.keys().next().value as number);

    if (this.selectedUser) {
      this.selectedUser.element.classList.remove(isSelected);
    }
    this.selectedUser = this.users.get(id) as UserWithoutImage;
    this.selectedUser.element.classList.add(isSelected);

    this.header.innerHTML = "";
    this.header.innerHTML = html`
      <div class="wrapper">
        <div class="user-avatar">
          <img
            src="${this.selectedUser.imagePath}"
            alt="User Avatar"
            width="60"
            height="60"
            decoding="async"
            loading="lazy"
          />
        </div>
        <div class="title">
          <span>${this.selectedUser.name}</span>
          <span>${this.selectedUser.title}</span>
        </div>
      </div>
    `;

    this.selectedUser.element.classList;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.chatService = new ChatService();
});
