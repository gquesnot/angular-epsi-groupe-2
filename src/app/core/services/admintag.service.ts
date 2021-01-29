import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdmintagService {

  constructor(
    private httpClient: HttpClient
  ) { }
  get(): Observable<any> {
    return this.httpClient.get<AdmintagService[]>(
      `${environment.api}/api/admin/tags`
    );
  }
}
