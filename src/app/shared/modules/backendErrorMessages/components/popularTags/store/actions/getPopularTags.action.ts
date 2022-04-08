import {createAction, props} from "@ngrx/store";
import {PopularTagType} from "src/app/shared/types/popularTag.type";
import {ActionTypes} from "../actionTypes";

export const getPopularTagsRequestAction = createAction(
  ActionTypes.GET_POPULAR_TAGS_REQUEST
);

export const getPopularTagsSuccessAction = createAction(
  ActionTypes.GET_POPULAR_TAGS_SUCCESS,
  props<{popularTags: PopularTagType[]}>()
);

export const getPopularTagsFailureAction = createAction(
  ActionTypes.GET_POPULAR_TAGS_FAILURE
);
