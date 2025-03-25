export interface MetaData {
  author: string | null;
  tags: string[];
  images: string[];
}

export interface DataItem {
  id: number;
  platform: string;
  title: string | null;
  status: string;
  headline: string | null;
  content: string;
  published_date: string;
  link: string;
  meta: MetaData;
}
