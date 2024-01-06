import { Routes } from '@angular/router';

import {LoginComponent} from "./components/login/login.component";
import {ChildInfoComponent} from "./components/child-info/child-info.component";
import {UpdateChildInfoComponent} from "./components/update-child-info/update-child-info.component";
import {SubscribeComponent} from "./components/subscribe/subscribe.component";
import {AddParentInviteCodeComponent} from "./components/add-parent-invite-code/add-parent-invite-code.component";
import {ChildAllInfoComponent} from "./components/child-all-info/child-all-info.component";
import {CreateSubscribeTypeComponent} from "./components/create-subscribe-type/create-subscribe-type.component";
import {SubscribeTypeAllComponent} from "./components/subscribe-type-all/subscribe-type-all.component";
import {ParentSignupComponent} from "./components/parent-signup/parent-signup.component";
import {ChildSignupComponent} from "./components/child-signup/child-signup.component";

export const routes: Routes = [
  {path: "parentSignup",component: ParentSignupComponent},
  {path: "childSignup",component: ChildSignupComponent},
  {path: "login",component: LoginComponent },
  {path: "childInfo",component: ChildInfoComponent },
  {path: "childInfo/updateChildInfo/:id",component: UpdateChildInfoComponent },
  {path: "subscribe",component: SubscribeComponent },
  {path: "add-parent-invite-code",component: AddParentInviteCodeComponent },
  {path: "child-all-info",component: ChildAllInfoComponent },
  {path: "create-subscribe-type",component: CreateSubscribeTypeComponent },
  {path: "all-subscribe-type",component: SubscribeTypeAllComponent },
];
