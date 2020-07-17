import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  constructor() {
    this.user = {
      image: '',
      name: 'Tessa',
      company: 'Host',
      description: 'Hosting has helped me pay for a new kitchen and other upgrades.',
      tel: '+989222222',
      address: 'Seyed-Khandan, Tehran, Iran'
    }
   }

  async getUser() {
    return Promise.resolve(this.user);
  }
}
