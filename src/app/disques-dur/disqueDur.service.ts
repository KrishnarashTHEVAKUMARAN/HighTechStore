import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {DisqueDur} from "./disqueDur";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DisqueDurService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getDisqueDur(): Observable<DisqueDur[]> {
    return this.http.get<DisqueDur[]>(`${this.apiServerUrl}/disquesDur/all`)
  }

  public addDisqueDur(DisqueDur: DisqueDur): Observable<DisqueDur[]> {
    return this.http.post<DisqueDur[]>(`${this.apiServerUrl}/disquesDur/add`,DisqueDur)
  }

  public updateDisqueDur(DisqueDur: DisqueDur): Observable<DisqueDur[]> {
    return this.http.put<DisqueDur[]>(`${this.apiServerUrl}/disquesDur/update`,DisqueDur)
  }

  public deleteDisqueDur(DisqueDurId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/disquesDur/delete/${DisqueDurId!}`)
  }

}
