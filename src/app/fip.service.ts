import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FipService {

  constructor(private httpclient: HttpClient) {

   }
   getfip(): Observable<any>
   {
     return this.httpclient.get('http://localhost:8080/api/v1/fip/list');
   }
}
