import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap, map} from "rxjs";
import {FeedService} from "../../services/feed.service";
import {GetFeedResponseInterface} from "../../types/getFeedResponse.interface";

import {
  getFeedFailureAction,
  getFeedRequestAction,
  getFeedSuccessAction,
} from "../actions/getFeed.action";

@Injectable()
export class GetFeedEffect {
  getFeed$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getFeedRequestAction),
      switchMap(({url}) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: GetFeedResponseInterface) => {
            console.log(feed);
            return getFeedSuccessAction({feed});
          }),
          catchError(() => {
            return of(getFeedFailureAction());
          })
        );
      })
    );
  });

  constructor(private actions$: Actions, private feedService: FeedService) {}
}
