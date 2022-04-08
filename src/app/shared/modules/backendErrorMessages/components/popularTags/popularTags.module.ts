import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {PopularTagsComponent} from "./components/popular-tags/popular-tags.component";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducers";
import {EffectsModule} from "@ngrx/effects";
import {GetPopularTagsEffect} from "./store/effects/getPopularTags.effects";
import {PopularTagsService} from "./services/popularTags.service";
import {LoadingModule} from "../loading/loading.module";
import {ErrorMessageModule} from "../errorMessage/errorMessage.module";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature("popularTags", reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    LoadingModule,
    ErrorMessageModule,
    RouterModule,
  ],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}
