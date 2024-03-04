import { HttpClient } from '@angular/common/http';
import { config } from '../../config/config';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private httpClient: HttpClient) {}

  postContactDetails(contactDetails: any): Observable<any> {
    return this.httpClient.post(config.serverAddress + 'saveContactDetails', contactDetails).pipe(
      tap((result) => {
        console.log(result);
        return result;
      })
    );
  }
}
