export interface Blogs {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  label: string;
  image: { url: string };
  description: string;
  contents: any;
  date: Date;
  related: [];
}
