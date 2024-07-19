class ChatManager {
  private chat: Chat;
  private chatList: ChatList;
  private chatForm: ChatForm;
  private chatService: ChatService;

  constructor() {
    this.chat = new Chat();
    this.chatList = new ChatList();
    this.chatForm = new ChatForm();
    this.chatService = new ChatService();

    this.init();
  }

  private init() {
    this.chatList.init();
    this.chatForm.init();
    this.chatService.init();
  }
}

class ChatForm {
  private form: HTMLFormElement;
  private input: HTMLInputElement;

  constructor() {
    this.form = document.getElementById("chat-form") as HTMLFormElement;
    this.input = document.getElementById(
      "chat-form__input"
    ) as HTMLInputElement;
  }

  public init() {
    this.form.addEventListener("submit", this.handleSubmit.bind(this));
  }

  private handleSubmit(event: Event) {
    event.preventDefault();

    const message = this.input.value;

    if (message) {
      chatService.sendMessage(message);
      this.input.value = "";
    }
  }
}
