import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PcPortable} from "./pcPortable";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PcPortableService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getPcPortable(): Observable<PcPortable[]> {
    return this.http.get<PcPortable[]>(`${this.apiServerUrl}/pcPortable/all`)
  }

  public addPcPortable(pcPortable: PcPortable): Observable<PcPortable[]> {
    return this.http.post<PcPortable[]>(`${this.apiServerUrl}/pcPortable/add`,pcPortable)
  }

  public updatePcPortable(pcPortable: PcPortable): Observable<PcPortable[]> {
    return this.http.put<PcPortable[]>(`${this.apiServerUrl}/pcPortable/update`,pcPortable)
  }

  public deletePcPortable(pcPortableId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/pcPortable/delete/${pcPortableId}`)
  }

}
