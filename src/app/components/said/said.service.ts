import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SaidService {

  constructor(
    private http: HttpClient
  ) { }

  getData(id) {
    return this.http.get('/storage/' + id);
  }
}
