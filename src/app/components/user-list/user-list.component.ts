import { Component, OnInit } from '@angular/core';
import { users } from './mock';
import { UserTypes } from 'src/app/models/user-to';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  public users?: UserTypes[];

  ngOnInit(): void {
    this.users = users;
  }
}
