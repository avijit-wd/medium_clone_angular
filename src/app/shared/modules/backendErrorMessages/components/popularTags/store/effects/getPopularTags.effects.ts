import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, of, switchMap, map} from "rxjs";
import {PopularTagType} from "src/app/shared/types/popularTag.type";
import {PopularTagsService} from "../../services/popularTags.service";
import {
  getPopularTagsFailureAction,
  getPopularTagsRequestAction,
  getPopularTagsSuccessAction,
} from "../actions/getPopularTags.action";

@Injectable()
export class GetPopularTagsEffect {
  getFeed$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getPopularTagsRequestAction),
      switchMap(() => {
        return this.popularTagsService.getPopularTags().pipe(
          map((popularTags: PopularTagType[]) => {
            return getPopularTagsSuccessAction({popularTags});
          }),
          catchError(() => {
            return of(getPopularTagsFailureAction());
          })
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService
  ) {}
}
