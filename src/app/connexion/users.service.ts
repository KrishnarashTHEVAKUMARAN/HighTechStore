import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Users} from "./users";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.apiServerUrl}/users/all`)
  }

  public loginUsers(users: Users): Observable<Users[]> {
    return this.http.post<Users[]>(`${this.apiServerUrl}/users/login`,users)
  }

  public addUsers(users: Users): Observable<Users[]> {
    return this.http.post<Users[]>(`${this.apiServerUrl}/users/add`,users)
  }

  public updateUsers(users: Users): Observable<Users[]> {
    return this.http.put<Users[]>(`${this.apiServerUrl}/users/update`,users)
  }

  public deleteUsers(usersId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/users/delete/${usersId}`)
  }

}
