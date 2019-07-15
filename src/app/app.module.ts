import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { HomeComponent } from './core/home/home.component';
import { MasterComponent } from './core/layouts/master/master.component';
import { FooterComponent } from './core/layouts/footer/footer.component';
import { AboutMeComponent } from './core/about-me/about-me.component';
import { SidebarComponent } from './core/layouts/sidebar/sidebar.component';
import { ProjectsComponent } from './core/projects/projects.component';
import { ContactMeComponent } from './core/contact-me/contact-me.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MasterComponent,
    FooterComponent,
    AboutMeComponent,
    SidebarComponent,
    ProjectsComponent,
    ContactMeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
