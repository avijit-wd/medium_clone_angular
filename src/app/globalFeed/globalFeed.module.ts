import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FeedModule} from "../shared/modules/backendErrorMessages/components/feed/feed.module";
import {GlobalFeedComponent} from "./components/global-feed/global-feed.component";
import {BannerModule} from "../shared/modules/backendErrorMessages/components/banner/banner.module";
import {PopularTagsModule} from "../shared/modules/backendErrorMessages/components/popularTags/popularTags.module";
import {FeedTogglerModule} from "../shared/modules/backendErrorMessages/components/feedToggler/feedToggler.module";

const routes = [{path: "", component: GlobalFeedComponent}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule,
  ],
  declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
