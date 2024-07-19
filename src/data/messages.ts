export type Message = {
  id: number;
  senderId: number;
  text: string;
  timestamp: string;
};

export const userMessages: Record<number, Message[]> = {
  10: [
    {
      id: 1,
      senderId: 10,
      text: "Hey, how's the new frontend framework coming along?",
      timestamp: "2023-07-19T10:00:00Z",
    },
    {
      id: 2,
      senderId: 0,
      text: "It's going well! Just working on optimizing performance.",
      timestamp: "2023-07-19T10:05:00Z",
    },
    {
      id: 3,
      senderId: 10,
      text: "Great to hear! Let me know if you need any help with testing.",
      timestamp: "2023-07-19T10:10:00Z",
    },
  ],
  1: [
    {
      id: 1,
      senderId: 1,
      text: "Do you have time to review my pull request?",
      timestamp: "2023-07-19T11:00:00Z",
    },
    {
      id: 2,
      senderId: 0,
      text: "Sure, I can take a look in about an hour. Is that okay?",
      timestamp: "2023-07-19T11:05:00Z",
    },
    {
      id: 3,
      senderId: 1,
      text: "Perfect, thanks!",
      timestamp: "2023-07-19T11:07:00Z",
    },
  ],
  2: [
    {
      id: 1,
      senderId: 2,
      text: "We need to discuss the roadmap for Q4. When are you free?",
      timestamp: "2023-07-19T13:00:00Z",
    },
    {
      id: 2,
      senderId: 0,
      text: "I can do tomorrow afternoon. How about 2 PM?",
      timestamp: "2023-07-19T13:15:00Z",
    },
    {
      id: 3,
      senderId: 2,
      text: "Sounds good. I'll send a calendar invite.",
      timestamp: "2023-07-19T13:20:00Z",
    },
  ],
  3: [
    {
      id: 1,
      senderId: 3,
      text: "I've uploaded new wireframes for the mobile app. Can you review them?",
      timestamp: "2023-07-19T14:00:00Z",
    },
    {
      id: 2,
      senderId: 0,
      text: "Absolutely, I'll take a look this afternoon and give you feedback.",
      timestamp: "2023-07-19T14:10:00Z",
    },
  ],
  4: [
    {
      id: 1,
      senderId: 4,
      text: "We're having issues with the CI pipeline. Can you help troubleshoot?",
      timestamp: "2023-07-19T15:00:00Z",
    },
    {
      id: 2,
      senderId: 0,
      text: "Of course. What specific errors are you seeing?",
      timestamp: "2023-07-19T15:05:00Z",
    },
  ],
  5: [
    {
      id: 1,
      senderId: 5,
      text: "I've got some interesting insights from our user data. Want to discuss?",
      timestamp: "2023-07-19T16:00:00Z",
    },
    {
      id: 2,
      senderId: 0,
      text: "Definitely! Let's set up a meeting tomorrow to go over it.",
      timestamp: "2023-07-19T16:10:00Z",
    },
  ],
  6: [
    {
      id: 1,
      senderId: 6,
      text: "Hey, do you know if we're still using Bootstrap or switching to Tailwind?",
      timestamp: "2023-07-19T17:00:00Z",
    },
    {
      id: 2,
      senderId: 0,
      text: "We're in the process of migrating to Tailwind. Why do you ask?",
      timestamp: "2023-07-19T17:05:00Z",
    },
  ],
  7: [
    {
      id: 1,
      senderId: 7,
      text: "Found a bug in the login flow. I'll create a ticket, but wanted to give you a heads up.",
      timestamp: "2023-07-19T18:00:00Z",
    },
    {
      id: 2,
      senderId: 0,
      text: "Thanks for the alert. Can you provide more details about the bug?",
      timestamp: "2023-07-19T18:10:00Z",
    },
  ],
  8: [
    {
      id: 1,
      senderId: 8,
      text: "We need to optimize our database queries. Got time to pair program?",
      timestamp: "2023-07-19T19:00:00Z",
    },
    {
      id: 2,
      senderId: 0,
      text: "Sure, I can spare an hour tomorrow morning. How's 10 AM?",
      timestamp: "2023-07-19T19:15:00Z",
    },
  ],
  9: [
    {
      id: 1,
      senderId: 9,
      text: "I've completed the system analysis report. Where should I send it?",
      timestamp: "2023-07-19T20:00:00Z",
    },
    {
      id: 2,
      senderId: 0,
      text: "Great work! Please upload it to our shared drive and send me the link.",
      timestamp: "2023-07-19T20:10:00Z",
    },
  ],
};
