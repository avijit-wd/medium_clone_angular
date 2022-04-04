import {reducers} from "./store/reducers";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {StoreModule} from "@ngrx/store";
import {RegisterComponent} from "./components/register/register.component";
import {AuthService} from "./services/auth.service";
import {RegisterEffect} from "./store/effects/register.effect";
import {EffectsModule} from "@ngrx/effects";
import {BackendErrorMessagesModule} from "../shared/modules/backendErrorMessages/backendErrorMessages.module";
import {PersistanceService} from "src/app/shared/services/persistance.service";
import {LoginComponent} from "./components/login/login.component";
import {LoginEffect} from "./store/effects/login.effect";
import {GetCurrentUserEffect} from "./store/effects/getCurrentUser.effect";

const routes = [
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature("auth", reducers),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect,
    ]),
    BackendErrorMessagesModule,
  ],
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}
