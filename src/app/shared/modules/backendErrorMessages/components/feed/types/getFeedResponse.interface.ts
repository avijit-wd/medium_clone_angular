import {ArticlesInterface} from "src/app/shared/types/article.interface";

export interface GetFeedResponseInterface {
  articles: ArticlesInterface[];
  articlesCount: number;
}
