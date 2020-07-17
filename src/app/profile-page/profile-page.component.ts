import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  user: User;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUserFromService();
  }
  async getUserFromService() {
    this.user = await this.userService.getUser();
  }
}
