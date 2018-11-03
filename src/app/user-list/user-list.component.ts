import { UserService } from '../shared/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Array<any>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getall().subscribe(users => {
      this.users = users.results;
    });
  }
}
