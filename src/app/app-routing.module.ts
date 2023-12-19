import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './comp/loginpage/loginpage.component';
import { FormsComponent } from './comp/forms/forms.component';
import { PagenotfoundpageComponent } from './comp/pagenotfoundpage/pagenotfoundpage.component';

const routes: Routes = [
  { path: 'login', component: LoginpageComponent },
  { path: 'form', component: FormsComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PagenotfoundpageComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  