import { Component, OnInit } from '@angular/core';
import { users } from './mock';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  public users?: any[];

  ngOnInit(): void {
    this.users = users;
  }
}
