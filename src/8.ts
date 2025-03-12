import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-my-cool-project',
  templateUrl: './my-cool-project.component.html',
  styleUrls: ['./my-cool-project.component.css']
})
export class MyCoolProjectComponent implements OnInit {
  users: Observable<User[]>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers().pipe(
      take(10),
      map((users: User[]) => users.filter(user => user.isCool))
    );
  }
}
