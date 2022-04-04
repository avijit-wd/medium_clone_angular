import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FeedComponent} from "../shared/modules/backendErrorMessages/components/feed/components/feed/feed.component";
import {FeedModule} from "../shared/modules/backendErrorMessages/components/feed/feed.module";
import {GlobalFeedComponent} from "./components/global-feed/global-feed.component";

const routes = [{path: "", component: GlobalFeedComponent}];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FeedModule],
  declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
