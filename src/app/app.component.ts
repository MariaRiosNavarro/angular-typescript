import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-typescript';

  courses: boolean = true;

  handleChange() {
    this.courses = !this.courses;
  }
}
