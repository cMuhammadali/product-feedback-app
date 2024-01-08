export interface IPost {
  id: number | string;
  title: string;
  description: string;
  type: string;
  commentsCount: number;
  likes: number;
  status: string;
  isLiked: boolean;
  comments: any[];
}
