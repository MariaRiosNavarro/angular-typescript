import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [AppComponent, CourseListComponent, UserListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
