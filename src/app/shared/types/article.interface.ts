import {ProfileInterface} from "./profile.interface";

export interface ArticlesInterface {
  slug: string;
  title: string;
  description: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: string[];
  favouritesCount: number;
  author: ProfileInterface;
  favourited: boolean;
}
