import type { User } from "@/types/user";

type UserWithoutImage = Omit<User, "image">;

export const users: UserWithoutImage[] = [
  {
    id: 10,
    name: "Trey Granderson",
    title: "Front End Engineer",
    online: true,
    imagePath: getImagePath("trey"),
  },
  {
    id: 1,
    name: "Alice Johnson",
    title: "Software Engineer",
    online: true,
    imagePath: getImagePath("a"),
  },
  {
    id: 2,
    name: "Carol White",
    title: "Product Manager",
    online: false,
    imagePath: getImagePath("c"),
  },
  {
    id: 3,
    name: "Bob Smith",
    title: "UX Designer",
    online: true,
    imagePath: getImagePath("b"),
  },
  {
    id: 4,
    name: "Sarah Lee",
    title: "DevOps Engineer",
    online: false,
    imagePath: getImagePath("d"),
  },
  {
    id: 5,
    name: "Emma Garcia",
    title: "Data Scientist",
    online: true,
    imagePath: getImagePath("e"),
  },
  {
    id: 6,
    name: "Frank Chen",
    title: "Frontend Developer",
    online: true,
    imagePath: getImagePath("f"),
  },
  {
    id: 7,
    name: "Grace Lay",
    title: "QA Engineer",
    online: false,
    imagePath: getImagePath("g"),
  },
  {
    id: 8,
    name: "Samantha Wilson",
    title: "Backend Developer",
    online: true,
    imagePath: getImagePath("h"),
  },
  {
    id: 9,
    name: "Ivy Patel",
    title: "Systems Analyst",
    online: false,
    imagePath: getImagePath("i"),
  },
];

function getImagePath(name: string) {
  return `/src/images/avatars/${name}.jpg`;
}
