import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'reset', component: ResetPasswordComponent},
  { path: '', redirectTo:"/login", pathMatch:"full"},
];

// const routes: Routes = [
//   { path: 'main', component: MainpageComponent },
//   { path: 'user-search', component: UserSearchComponent},
//   { path: 'repository-search', component: RepositorySearchComponent},
//   { path: '', redirectTo:"/main", pathMatch:"full"},
//   { path: '**', component: NotFoundComponent},

// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
