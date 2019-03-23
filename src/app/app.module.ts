import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor, ProjectsResolver, ProjectsService, DevicesResolver, DevicesService } from './core';
import { AppComponent } from './root/app.component';
import { NavMenuComponent, FooterComponent } from './components';
import { HomeComponent, ProjectsComponent, DevicesListComponent, UsersComponent } from './pages';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
    DevicesListComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ProjectsResolver,
    ProjectsService,
    DevicesResolver,
    DevicesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
