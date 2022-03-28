import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CleUSB} from "./cleUSB";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CleUSBService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getCleUSB(): Observable<CleUSB[]> {
    return this.http.get<CleUSB[]>(`${this.apiServerUrl}/cleUsb/all`)
  }

  public addCleUSB(CleUSB: CleUSB): Observable<CleUSB[]> {
    return this.http.post<CleUSB[]>(`${this.apiServerUrl}/cleUsb/add`,CleUSB)
  }

  public updateCleUSB(CleUSB: CleUSB): Observable<CleUSB[]> {
    return this.http.put<CleUSB[]>(`${this.apiServerUrl}/cleUsb/update`,CleUSB)
  }

  public deleteCleUSB(CleUSBId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/cleUsb/delete/${CleUSBId!}`)
  }

}
