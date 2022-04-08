import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {BannerModule} from "../shared/modules/backendErrorMessages/components/banner/banner.module";
import {FeedModule} from "../shared/modules/backendErrorMessages/components/feed/feed.module";
import {FeedTogglerModule} from "../shared/modules/backendErrorMessages/components/feedToggler/feedToggler.module";
import {PopularTagsModule} from "../shared/modules/backendErrorMessages/components/popularTags/popularTags.module";
import {YourFeedComponent} from "./components/your-feed/your-feed.component";

const routes = [{path: "feed", component: YourFeedComponent}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule,
  ],
  declarations: [YourFeedComponent],
})
export class YourFeedModule {}
