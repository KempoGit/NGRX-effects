import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent {

  users!: User[];

  constructor(private UserService: UserService) {
    this.UserService.getUsers().subscribe( data => {
      console.log(data);
      this.users = data;
    })
  }

}
