export interface User {
  id: number;
  name: string;
  title: string;
  online: boolean;
  image: ImageMetadata;
  imagePath?: string;
}
