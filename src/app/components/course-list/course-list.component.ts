import { Component, OnInit } from '@angular/core';
import { courses } from './mock';
import { CourseTypes } from 'src/app/models/course-to';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  public courses?: CourseTypes[];

  ngOnInit(): void {
    this.courses = courses;
  }
}
