import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_ROUTES } from './app.routes';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { CoverComponent } from './components/cover/cover.component';
import { DetailsComponent } from './components/details/details.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CoverComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
