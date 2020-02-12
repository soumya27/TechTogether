import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Vines} from '../model/vines';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VineService {

  vineResourceURL = 'https://39p5ig16zf.execute-api.us-east-2.amazonaws.com/prod/vines';
  constructor(private http: HttpClient) { }

  /*
   * Return all the Vines from DB
   */
  getVines(): Observable<Array<Vines>> {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Credentials': 'true'
    //   })
    // };
    return this.http.get<Array<Vines>>(this.vineResourceURL);
  }
}
