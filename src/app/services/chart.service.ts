import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  chartUrl: string = environment.chartUrl;
  auth_token: string = environment.auth_token;

  private datasubject = new BehaviorSubject<any>([]);
  chartData = this.datasubject.asObservable();
  constructor(private _http: HttpClient) { }

  /**
   * Retrieves data from the specified chart URL using HTTP GET request.
   *
   * @return {void} Sets the chartData property with the response body data.
   */
  getData() {
    const Bearer_token = `Bearer ${this.auth_token}`
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': Bearer_token,
      "ngrok-skip-browser-warning": "69420"
    })

    this._http.get<any>(this.chartUrl, { headers: headers, observe: 'response' }).subscribe(data => {
      this.datasubject.next(data.body)
    })

  }

}
