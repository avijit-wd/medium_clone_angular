import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {EffectsModule} from "@ngrx/effects";
import {FeedComponent} from "./components/feed/feed.component";
import {FeedService} from "./services/feed.service";
import {GetFeedEffect} from "./store/effects/getFeed.effect";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducers";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature("feed", reducers),
    RouterModule,
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}