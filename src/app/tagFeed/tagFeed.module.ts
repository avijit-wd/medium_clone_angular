import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {BannerModule} from "../shared/modules/backendErrorMessages/components/banner/banner.module";
import {FeedModule} from "../shared/modules/backendErrorMessages/components/feed/feed.module";
import {FeedTogglerModule} from "../shared/modules/backendErrorMessages/components/feedToggler/feedToggler.module";
import {PopularTagsModule} from "../shared/modules/backendErrorMessages/components/popularTags/popularTags.module";
import {TagFeedComponent} from "./components/tag-feed/tag-feed.component";

const routes = [{path: "tags/:slug", component: TagFeedComponent}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule,
  ],
  declarations: [TagFeedComponent],
})
export class TagFeedModule {}
