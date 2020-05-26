export interface Blogs {
  id: string;
  createdAt: string;
  title: string;
  label: string;
  image: { url: string };
  description: string;
  contents: any;
  date: Date;
}
