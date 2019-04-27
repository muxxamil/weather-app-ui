import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';;
import {Observable} from 'rxjs/Observable';
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TemperatureService {
  constructor(private http: HttpClient) {}

  getLogs(params = null) {
    return this.http.get("/api/temperatures", {...httpOptions, params: params});
  }

  getTemperatureStatistics() {
    return this.http.get("/api/temperatures/statistics", httpOptions);
  }

  addTemperature(params: {temperature: number}) {
    return this.http.post("/api/temperatures", params, httpOptions);
  }

  deleteTemperature(id: string) {
    return this.http.delete(`/api/temperatures/${id}`, httpOptions);
  }
}
