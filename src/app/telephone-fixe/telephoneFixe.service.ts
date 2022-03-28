import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {TelephoneFixe} from "./telephoneFixe";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TelephoneFixeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getTelephoneFixe(): Observable<TelephoneFixe[]> {
    return this.http.get<TelephoneFixe[]>(`${this.apiServerUrl}/telephoneFixe/all`)
  }

  public addTelephoneFixe(telephoneFixe: TelephoneFixe): Observable<TelephoneFixe[]> {
    return this.http.post<TelephoneFixe[]>(`${this.apiServerUrl}/telephoneFixe/add`,telephoneFixe)
  }

  public updateTelephoneFixe(telephoneFixe: TelephoneFixe): Observable<TelephoneFixe[]> {
    return this.http.put<TelephoneFixe[]>(`${this.apiServerUrl}/telephoneFixe/update`,telephoneFixe)
  }

  public deleteTelephoneFixe(telephoneFixeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/telephoneFixe/delete/${telephoneFixeId!}`)
  }

}
