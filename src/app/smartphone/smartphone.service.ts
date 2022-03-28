import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Smartphone} from "./smartphone";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getSmartphone(): Observable<Smartphone[]> {
    return this.http.get<Smartphone[]>(`${this.apiServerUrl}/smartphone/all`)
  }

  public addSmartphone(smartphone: Smartphone): Observable<Smartphone[]> {
    return this.http.post<Smartphone[]>(`${this.apiServerUrl}/smartphone/add`,smartphone)
  }

  public updateSmartphone(smartphone: Smartphone): Observable<Smartphone[]> {
    return this.http.put<Smartphone[]>(`${this.apiServerUrl}/smartphone/update`,smartphone)
  }

  public deleteSmartphone(smartphoneId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/smartphone/delete/${smartphoneId!}`)
  }

}
