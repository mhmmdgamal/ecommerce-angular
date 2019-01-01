import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  private api  = '//localhost:8080'; // service(rest api)
  private userApi = this.api + '/users';

  constructor(private http: HttpClient) { }

  getall(): Observable<any> {
    // return this.http.get(this.userApi + '/list');
    return this.http.get('https://randomuser.me/api/?results=5');
  }

  get(id: string) {
    // return this.http.get(this.userApi + '/' + id);
  }
}
