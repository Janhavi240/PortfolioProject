import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { ExperienceComponent } from './experience/experience.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    ContactComponent,
    ProjectComponent,
    CertificatesComponent,
    ExperienceComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
    {path :'home',component:HomeComponent},
    {path :'about',component:AboutComponent},
     {path:'education',component:EducationComponent},
     {path :'skills',component:SkillsComponent},
     {path :'contact',component:ContactComponent},
    {path:'project',component:ProjectComponent},
    {path:'certificates' ,component:CertificatesComponent},
    {path:'experience' ,component:ExperienceComponent},
    {path : '',component:HomeComponent},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
