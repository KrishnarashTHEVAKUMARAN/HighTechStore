import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PcBureau} from "./pcBureau";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PcBureauService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getPcBureau(): Observable<PcBureau[]> {
    return this.http.get<PcBureau[]>(`${this.apiServerUrl}/pcBureau/all`)
  }

  public addPcBureau(pcBureau: PcBureau): Observable<PcBureau[]> {
    return this.http.post<PcBureau[]>(`${this.apiServerUrl}/pcBureau/add`,pcBureau)
  }

  public updatePcBureau(pcBureau: PcBureau): Observable<PcBureau[]> {
    return this.http.put<PcBureau[]>(`${this.apiServerUrl}/pcBureau/update`,pcBureau)
  }

  public deletePcBureau(pcBureauId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/pcBureau/delete/${pcBureauId!}`)
  }

}
