import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BodyComponent } from './body/body.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { SigninComponent } from './signin/signin.component';
import { TextComponent } from './text/text.component';

const routes: Routes = [
  {path:'',component:TextComponent},
  {path:'home',component:HomeComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'services',component:ServicesComponent},
  {path:'signin',component:SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent,ContactUsComponent,AboutUsComponent,
ServicesComponent,SigninComponent];